import "./App.css";
import Home from "./pages/Home";
import Startpage from "./pages/startPage";
import { Auth } from "./pages/Auth";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <Authprovider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Startpage />} />
          <Route
            path="/Home"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
          <Route path="auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
