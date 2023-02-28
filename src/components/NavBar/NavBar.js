import React from "react";
import './NavBar.css'
import logo from './../../resource/image/logo.png'

function NavLinks({ type }) {
  switch (type) {
    case "signup":
      return (
        <div className="Links">
        <a href="/login">Login</a>
        <a href="/home">Home</a>
        </div>
      );
      case "login":
      return (
        <div className="Links">
        <a href="/signup">Signup</a>
        <a href="/home">Home</a>
        </div>
      );
      case "owner":
      return (
        <div className="Links">
        <a href="/owner">Home</a>
        <a href="/home" onClick={()=>{window.localStorage.removeItem("email")}}>Logout</a>
        </div>
      );
      case "clinic":
      return (
        <div className="Links">
        <a href="/clinic">Home</a>
        <a href="/home" onClick={()=>{window.localStorage.removeItem("email")}}>Logout</a>
        </div>
      );

    default:
      break;
  }
}

function NavBar({ type }) {
  return (
    <div className="Nav">
      <div className="Logo">
        <img src={logo} alt="logo" />
        <h2 className="logo_color">Petly</h2>
      </div>
      <NavLinks type={type} />
    </div>
  );
}

export default NavBar;
