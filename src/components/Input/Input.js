import React from 'react'
import './Input.css'


function Input({id, value,type, setOnChange, error , label, className}){
    return(
        <div className="input_root">
            <div className={`input ${className}`}>
              <label htmlFor={id}>{label}</label>
              {(type === 'file')? <input id={id} value={value} onChange={(e)=>{setOnChange(e.target.files[0])}} type={type} /> 
              :(type === 'checkbox')? <input  id={id} checked={value} onChange={(e)=>{setOnChange(e.target.value)}} type={type} />
          :<input  id={id} value={value} onChange={(e)=>{setOnChange(e.target.value)}} type={type} /> }
            </div>
            {(error)? (<p className="error">{error}</p>): ''}
          </div>
    );
}

export default Input;