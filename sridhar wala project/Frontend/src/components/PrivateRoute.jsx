// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ children }) => {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
