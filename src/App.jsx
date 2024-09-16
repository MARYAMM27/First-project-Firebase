import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home"; // Import your Home component
import About from "./components/About"; // Example import for nested routes
import ContactUs from "./components/ContactUs"; // Example import for nested routes
import Feedback from "./components/Feedback"; // Example import for nested routes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />}> {/* Home route with nested routes */}
          <Route path="about" element={<About />} /> {/* Nested routes */}
          <Route path="contact-us" element={<ContactUs />} /> {/* Nested routes */}
          <Route path="feedback" element={<Feedback />} /> {/* Nested routes */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
nknmxn