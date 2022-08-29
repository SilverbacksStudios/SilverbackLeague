import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../pages/Auth";
import "../App.css";

const Layout = ({ children }) => {
  const auth = useAuth();

  return (
    <div>
      <header></header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
