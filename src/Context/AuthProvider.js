import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const signUpService = (email, password) => {
  return axios.post("https://simplilear.mittalminakshi.repl.co/user/signup", {
    email,
    password,
  });
};

const loginService = (email, password) => {
  return axios.post("https://simplilear.mittalminakshi.repl.co/user/login", {
    email,
    password,
  });
};

export const AuthProvider = ({ children }) => {
  const {
    isUserLoggedIn,
    token: savedToken,
    userId,
  } = JSON.parse(localStorage?.getItem("login")) || {
    isUserLoggedIn: false,
    token: null,
    userId: null,
  };

  const [isUserLogin, setLogin] = useState(isUserLoggedIn);
  const [token, setToken] = useState(savedToken);
  const [userDetails, setUserDetails] = useState(userId);
  const navigate = useNavigate();

  const signUpUserWithDetails = async (email, password) => {
    const signUpResponse = await signUpService(email, password);
    if (signUpResponse.status === 200) {
      loginUserWithCredentials(email, password);
    }
  };

  async function loginUserWithCredentials(email, password) {
    try {
      const loginResponse = await loginService(email, password);
      if (loginResponse.status === 200) {
        loginUser(loginResponse.data);
        navigate("/courses");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const loginUser = ({ token, userId }) => {
    setToken(token);
    setLogin(true);
    setUserDetails(userId);
    localStorage.setItem(
      "login",
      JSON.stringify({ isUserLoggedIn: true, token, userId })
    );
  };

  const logout = () => {
    localStorage.removeItem("login");
    setLogin(false);
    setToken(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLogin,
        logout,
        token,
        signUpUserWithDetails,
        loginUserWithCredentials,
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
