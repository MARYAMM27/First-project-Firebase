import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Replace with actual authentication logic
  return isAuthenticated ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/home/*" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route index element={<div>Home - Personal Info</div>} /> {/* This renders the personal info page */}
          <Route path="screen1" element={<Screen1 />} />
          <Route path="screen2" element={<Screen2 />} />
          <Route path="screen3" element={<Screen3 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
