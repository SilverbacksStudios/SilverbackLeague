import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../pages/Auth";
import "../App.css";

const Layout = ({ children }) => {
  const auth = useAuth();

  return (
    <div>
      <header>
        <div className="signinScreen">
          <Link to={"/Home"}>Home</Link>

          {auth.user ? (
            <button className="logoutButton" onClick={auth.logout}>
              Logout
            </button>
          ) : (
            <Link to={"/Createuser"}>Sign up</Link>
          )}
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
