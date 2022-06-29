import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../pages/Auth";

const Layout = ({ children }) => {
  const auth = useAuth();

  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          {auth.user ? (
            <li>
              <button onClick={auth.logout}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to={"/SignIn"}>Sign In</Link>
            </li>
          )}
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
