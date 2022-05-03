import "./App.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { Link } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>supabase-auth-react</h1>
      <Router>
        {/* Wrap routes in the AuthProvider 👇 */}
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}
export default App;
