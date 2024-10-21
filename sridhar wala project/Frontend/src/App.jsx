// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./pages/Register";
import Navbar from "./components/Navbar"; // Import Navbar
import Hotels from "./pages/Hotels";
import Blood from "./pages/Blood";
import BloodForm from "./pages/BloodForm";

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route */}
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/hotels" 
          element={
            <PrivateRoute>
              <Hotels />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/blood" 
          element={
            <PrivateRoute>
              <Blood />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/bloodForm" 
          element={
            <PrivateRoute>
              <BloodForm/>
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
