import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Startpage from "./pages/startPage";
import Createuser from "./pages/Createuser";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Signin";
import { Oldseasons } from "./pages/Seasons/Oldseasons";
import { AuthProvider } from "./pages/Auth";
import ProtectedRoute from "./components/Protectedroutes";
import { Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <Fragment>
    <div className="bg-image"></div>
    <ToastContainer />
    <Navbar />
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Startpage />} />
          <Route path={"Createuser"} element={<Createuser />} />
          <Route path={"SignIn"} element={<SignIn />} />
          <Route path={"Oldseasons"} element={<Oldseasons />} />
          <Route
            path={"home"}
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </Fragment>,
  document.getElementById("root")
);
