import { useState } from 'react';
import './../../styles/main/main.css';

export default function FormInput(props, index) { 
  const { label, value, required, handleChange, errorMsg, ...input } = props;

  return (
    <div className="formInput" key={index}>
      <label htmlFor={input.name} className="form-label">
        {label}
      </label>

      <input
        {...input}
        value={value}
        onChange={handleChange} 
        required={required}
        aria-label={input.name}
        aria-required="true" 
        tabIndex="0" 
        key={input.id}
      />

      <span className="form-error-msg">{errorMsg}</span> 
    </div>
  );
}