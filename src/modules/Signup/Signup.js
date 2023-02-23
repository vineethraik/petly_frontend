import React, {useState, useId}from "react";
import {useNavigate} from 'react-router-dom';
import "./Signup.css";
import NavBar from "./../../components/NavBar/NavBar";
import Input from './../../components/Input/Input'

function Signup() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [type,setType] = useState('owner');
  const [errors,setErrors] = useState({});

  const nameInputId = useId();
  const emailInputId = useId();
  const passwordInputId = useId();
  const confirmPasswordInputId = useId();
  const typeInputId = useId();

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    let errs = {};
    if(name === ''){
      errs.name = "name cant be empty"
    }
    if(email === ''){
      errs.email = "email cant be empty"
    }
    if(password === ''){
      errs.password = "password cant be empty"
    }
    if(confirmPassword === ''){
      errs.confirmPassword = "Confirm password cant empty"
    }

    if(Object.keys(errs).length !== 0){
      setErrors(errs)
      console.log(errs);
    }else{
      console.log('login');
      navigate('/login')
    }

  }

  return (
    <>
      <NavBar type="signup" />
      <div className="auth ">
        <div className=" main_box color2">
          <h2>Signup</h2>
          <Input id={nameInputId} label={'Name:'} value={name} setOnChange={setName} error={errors.name} type='name'/>
          <Input id={emailInputId} label={'Email:'} value={email} setOnChange={setEmail} error={errors.email} type='email'/>
          <Input id={passwordInputId} label={'Password:'} value={password} setOnChange={setPassword} error={errors.password} type='password'/>
          <Input id={confirmPasswordInputId} label={'Confirm Password:'} value={confirmPassword} setOnChange={setConfirmPassword} error={errors.confirmPassword} type='password'/>
          
          <div className="input_root">
            <div className="input">
              <label htmlFor={typeInputId}>Signing in as:</label>
              <select id={typeInputId} defaultValue={type} onChange={(e)=>{setType(e.target.value)}} name="SelectedType">
                <option value="owner">Pet Owner</option>
                <option value="clinic">Pet Clinic</option>
              </select>
            </div>
          </div>
          <div className="input_root button ">
            <button onClick={handleSubmit} type="button" className="button button_color" >Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
