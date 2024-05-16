import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Private = () => {
  const { userLoggedIn } = useContext(AuthContext);

  return userLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default Private;
