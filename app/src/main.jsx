import "./App.css";
import Home from "./pages/Home";
import Startpage from "./pages/startPage";
import Createuser from "./pages/Createuser";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Signin";
import { AuthProvider } from "./pages/Auth";
import ProtectedRoute from "./components/Protectedroutes";
import { Fragment } from "react";

ReactDOM.render(
  <Fragment>
    <h1>The Silverback League</h1>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Startpage />} />
          <Route path={"Createuser"} element={<Createuser />} />
          <Route path={"SignIn"} element={<SignIn />} />
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
