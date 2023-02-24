import "./App.css";
import Login from './../modules/Login/Login';
import database from './../database/database';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import _Routes from "./../routes";

function App() {

  let db = new database();

  return (
    <BrowserRouter>
      <Routes>
        {_Routes.map((rt) => {
          if (rt.type === "private") {
            let user_email = window.localStorage.getItem("email");
            // let user_role = window.localStorage.getItem("role");
            if (user_email ) {
              if(db.findAccount(user_email)){
                if(rt.role.includes(db.getType(user_email).toLowerCase())){
                  return <Route key={rt.path} path={rt.path} element={rt.element} />;
                }
              }
            }
          } else {
            return <Route key={rt.path} path={rt.path} element={rt.element} />;
          }
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
