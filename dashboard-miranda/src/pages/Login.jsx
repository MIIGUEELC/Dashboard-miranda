import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../Features/LoginThunk';
import { useNavigate } from 'react-router-dom';
import {
  LoginContainer,
  LoginForm,
  Title,
  InputGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
} from './LoginStyled'; 

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook de navegación
  const { loginError, isAuthenticated } = useSelector((state) => state.login);

  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama al loginThunk
    dispatch(loginThunk(formData.username, formData.password));
  };

  // Redirige al usuario a la página principal si está autenticado
  if (isAuthenticated) {
    navigate('/');
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Inicia Sesión</Title>
        {loginError && <ErrorMessage>{loginError}</ErrorMessage>}

        <InputGroup>
          <Label htmlFor="username">Nombre de usuario</Label>
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="Ingresa tu usuario"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <Button type="submit">Iniciar sesión</Button>
      </LoginForm>
    </LoginContainer>
  );
};
