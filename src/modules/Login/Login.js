import React, { useState, useId } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./../../components/NavBar/NavBar";
import Input from "./../../components/Input/Input";
import database from "./../../database/database";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const emailInputId = useId();
  const passwordInputId = useId();

  const navigate = useNavigate();
  const db = new database();

  const handleSubmit = (e) => {
    let errs = {};

    if (email === "") {
      errs.email = "email cant be empty";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errs.email = "Invalid Email try again";
    }

    if (password === "") {
      errs.password = "password cant be empty";
    } else if (password.length < 8 || password.length > 20) {
      errs.password = "Password Should have 8 to 20 charectors";
    } else if (!/[A-Z]/.test(password)) {
      errs.password = "Password Should contain Uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      errs.password = "Password Should contain Lowercase letter";
    } else if (!/[0-9]/.test(password)) {
      errs.password = "Password Should contain Numaric value";
    } else if (!/[!@#$&]/.test(password)) {
      errs.password = "Password Should contain Spetial charactor (!@#$&)";
    }

    if (Object.keys(errs).length !== 0) {
      setErrors(errs);
      console.log(errs);
    } else {
      switch (db.authenticate(email, password)) {
        case "Owner":
          window.localStorage.setItem("email", email);
          window.localStorage.setItem("role", "Owner");
          navigate('/owner');
          break;
        case "Clinic":
          window.localStorage.setItem("email", email);
          window.localStorage.setItem("role", "Clinic");
          navigate('/clinic');
          break;

        default:
            setErrors({email: "User not Found"})
          break;
      }
    }
  };
  return (
    <>
      <NavBar type="login" />
      <div className="auth ">
        <div className=" main_box color2">
          <h2>Login</h2>
          <Input
            id={emailInputId}
            label={"Email:"}
            value={email}
            setOnChange={setEmail}
            error={errors.email}
            type="email"
          />
          <Input
            id={passwordInputId}
            label={"Password:"}
            value={password}
            setOnChange={setPassword}
            error={errors.password}
            type="password"
          />
          <div className="input_root button ">
            <button
              onClick={handleSubmit}
              type="button"
              className="button button_color"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
