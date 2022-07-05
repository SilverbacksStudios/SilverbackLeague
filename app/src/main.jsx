import "./App.css";
import Home from "./pages/Home";
import Startpage from "./pages/startPage";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Signin";
import { AuthProvider } from "./pages/Auth";
import ProtectedRoute from "./components/Protectedroutes";
import { Fragment } from "react";

ReactDOM.render(
  <Fragment>
    <div className="bg-image"></div>
    <link rel="icon" type="image/svg+xml" href="/src/silverback.svg" />

    <h1>The Silverback League</h1>
    <img name="logo" src="src/silverback.svg" alt="Silverbacklogo" />
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Startpage />} />
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
