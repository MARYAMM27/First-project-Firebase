import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate hook

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        // Signup logic (e.g., Firebase createUserWithEmailAndPassword)
        console.log("Signed up:", email);
        // Redirect to home after successful signup
        navigate("/home");
      } else {
        // Login logic (e.g., Firebase signInWithEmailAndPassword)
        console.log("Logged in:", email);
        // Redirect to home after successful login
        navigate("/home");
      }
    } catch (error) {
      setError("Authentication error.");
    }
  };

  return (
    <div className="auth-container">
      <h1>{isSignup ? "Sign Up" : "Login"}</h1>
      <form onSubmit={handleAuth}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <p>
        {isSignup ? (
          <>
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setIsSignup(false)} // Toggle to Login form
              style={{ background: "none", border: "none", color: "blue", cursor: "pointer" }}
            >
              Login
            </button>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => setIsSignup(true)} // Toggle to Signup form
              style={{ background: "none", border: "none", color: "blue", cursor: "pointer" }}
            >
              Sign Up
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthForm;
