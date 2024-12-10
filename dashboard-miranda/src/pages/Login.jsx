import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../Features/LoginThunk';

import fields from '../data/users.json'; 

export const Login = () => {
  const dispatch = useDispatch();
  const { loginError } = useSelector((state) => state.login); 

  const [formData, setFormData] = useState({ email: '', password: '' }); 

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginThunk(formData.email, formData.password));
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        {/* Mostrar el error si hay uno */}
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

        {/* Campo para el correo electrónico */}
        {fields.map((field, index) => {
          if (field.label === "Correo Electrónico") {
            return (
              <div key={index}>
                <label>{field.label}</label>
                <input
                  type="email"
                  name="email"
                  placeholder={field.placeholder}
                  value={formData.email}
                  onChange={handleChange}
                  required={field.required}
                />
              </div>
            );
          }
          return null;
        })}

        {/* Campo para la contraseña */}
        {fields.map((field, index) => {
          if (field.label === "Contraseña") {
            return (
              <div key={index}>
                <label>{field.label}</label>
                <input
                  type={field.type}
                  name="password"
                  placeholder={field.placeholder}
                  value={formData.password}
                  onChange={handleChange}
                  required={field.required}
                />
              </div>
            );
          }
          return null;
        })}

        {/* Botón de submit */}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

 
