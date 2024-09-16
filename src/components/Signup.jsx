import React, { useState } from "react";
import { auth } from "../firebaseConfig"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png"; 
import "./login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); 
  const [passwordError, setPasswordError] = useState(""); 
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/;
    
    if (password.length < minLength) {
      return "Password must be at least 8 characters long.";
    }
    if (!hasNumber.test(password)) {
      return "Password must contain at least one numeric character.";
    }
    if (!hasSymbol.test(password)) {
      return "Password must contain at least one special character.";
    }
    return "";
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); 
    setPasswordError(""); 

    const passwordError = validatePassword(password);
    if (passwordError) {
      setPasswordError(passwordError);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true); // Mark as successful sign-up
      setTimeout(() => {
        navigate("/"); // Navigate to the login page
      }, 1000); // Redirect after a short delay to ensure the success message is visible
    } catch (error) {
      setError("Already exists.\n\nFailed to create an account. Please check your details.");

    }
  }

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Sign Up</h1>
        {!success ? (
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {passwordError && <p className="password-error">{passwordError}</p>}
            {error && <p className="error">{error}</p>}
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
        ) : (
          <div className="success-message">
            <p>Successfully signed up!</p>
            <button className="login-btn" onClick={() => navigate("/")}>
              Go to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
