import "./SignUpForm.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context";
import { useState } from "react";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUpUserWithDetails } = useAuth();

  const signUpHandler = async (event) => {
    event.preventDefault();
    signUpUserWithDetails(email, password);
  };

  return (
    <div className="form-container sign-up-container">
      <form>
        <h1>Create Account</h1>
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
        <button style={{ backgroundColor: "#2cb8cb" }} onClick={signUpHandler}>
          Sign Up
        </button>
        <span>
          Already have an account? <Link to="/user/login">Log In</Link>
        </span>
      </form>
    </div>
  );
};
