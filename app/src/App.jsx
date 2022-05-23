import "./App.css";
import Home from "./pages/Home";
import Startpage from "./pages/startPage";
import Signin from "./pages/Signin";
import ReactDOM  from "react-dom";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {Authprovider} from "./pages/Auth";
import  Protectedroutes from "./components/Protectedroutes"

ReactDOM.render(
    <Authprovider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Startpage />} />
          <Route path="Signin" element={<Signin />} />
          <Route path= {"Home"} element={<Protectedroutes><Home /></Protectedroutes>} />
        </Routes>
      </BrowserRouter>
    </Authprovider>,
    document.getElementById ('root')
  );


export default App;
