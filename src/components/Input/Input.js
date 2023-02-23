import React from 'react'
import './Input.css'


function Input({id, value,type, setOnChange, error , label}){
    return(
        <div className="input_root">
            <div className="input">
              <label htmlFor={id}>{label}</label>
              <input id={id} value={value} onChange={(e)=>{setOnChange(e.target.value)}} type={type} />
            </div>
            {(error)? (<p className="error">{error}</p>): ''}
          </div>
    );
}

export default Input;