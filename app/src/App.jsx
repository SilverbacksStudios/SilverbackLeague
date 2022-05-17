import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Startpage from "./pages/startPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="startpage" element={<Startpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
