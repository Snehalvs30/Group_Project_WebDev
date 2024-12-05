import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  // Redirect unauthenticated users to Landing Page
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Redirect users with incorrect roles to Landing Page
  if (role && !role.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
