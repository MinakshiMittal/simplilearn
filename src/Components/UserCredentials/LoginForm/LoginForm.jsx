import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../Context";

export const LoginForm = () => {
  const { isUserLogin, loginUserWithCredentials, logout } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();
    isUserLogin ? logout() : loginUserWithCredentials(email, password);
  };

  return (
    <div class="form-container sign-in-container">
      <form>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={loginHandler}>Sign In</button>
        <span>
          Don't have any account?
          <Link to="/user/signup">Sign Up</Link>
        </span>
      </form>
    </div>
  );
};
