import "./App.css";
// import {database} from './../../database/database.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./../modules/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {_Routes.map((rt) => {
          return <Route key={rt.path} path={rt.path} element={rt.element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
