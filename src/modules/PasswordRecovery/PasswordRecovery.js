import React, { useState, useId } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./../../components/NavBar/NavBar";
import Input from "./../../components/Input/Input";
import database from "./../../database/database"

function PasswordRecovery() {
  const [email, setEmail] = useState("");
  const [secretString, setSecretString] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const emailInputId = useId();
  const secretStringInputId = useId();
  const passwordInputId = useId();
  const confirmPasswordInputId = useId();

  const navigate = useNavigate();
  const db = new database()

  const handleSubmit = (e) => {
    let errs = {};

    if (email === "") {
      errs.email = "email cant be empty";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errs.email = "Invalid Email try again";
    }else if(!db.findAccount(email)){
        errs.email = "Account not found";
    }

    if(((secretString === '')||(!(/\b[0-9A-F]{6,20}\b/gi.test(secretString))))){
        errs.secretString = "Invalid Secret String"
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

    if(confirmPassword === ''){
        errs.confirmPassword = "Confirm password cant empty"
      } else if(!(confirmPassword === password)){
        errs.confirmPassword = "Confirm password Should be same as password"
      }

    if (Object.keys(errs).length !== 0) {
      setErrors(errs);
      console.log(errs);
    } else {
        navigate('/login')
    }
  };

  return (
    <>
      <NavBar type="signup" />
      <div className="auth ">
        <div className=" main_box color2">
          <h2>Password Reset</h2>
          <Input
            id={emailInputId}
            label={"Email:"}
            value={email}
            setOnChange={setEmail}
            error={errors.email}
            type="email"
          />
          <Input
            id={secretStringInputId}
            label={"Secret String:"}
            value={secretString}
            setOnChange={setSecretString}
            error={errors.secretString}
            type="text"
          />
          <Input
            id={passwordInputId}
            label={"New Password:"}
            value={password}
            setOnChange={setPassword}
            error={errors.password}
            type="password"
          />
          <Input
            id={confirmPasswordInputId}
            label={"Confirm Password:"}
            value={confirmPassword}
            setOnChange={setConfirmPassword}
            error={errors.confirmPassword}
            type="password"
          />
          <div className="input_root button ">
            <button
              onClick={handleSubmit}
              type="button"
              className="button button_color"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordRecovery;
