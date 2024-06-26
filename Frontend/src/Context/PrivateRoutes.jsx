import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
export default function PrivateRoutes({ children }) {
  const { login, logout, isAuth } = useContext(AuthContext);
 
  return children;
}
