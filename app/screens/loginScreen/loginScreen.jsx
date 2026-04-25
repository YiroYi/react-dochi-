import React from "react";
import "./loginScreen.css";
import {useNavigate} from "react-router";

const users = [
  {
    user: "usuario1",
    password: "password123"
  },
  {
    user: "usuario2",
    password: "abc456"
  },
  {
    user: "usuario3",
    password: "qwerty789"
  }
];

// const foundUser = users.find(u =>
//     u.user === inputUser && u.password === inputPassword
// );

export const LoginScreen = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/users");
  }
  return (
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
              type="text"
              placeholder="Usuario"
              name="username"
          />

          <input
              type="password"
              placeholder="Contraseña"
              name="password"
          />

          <p className="error">Mensaje de error</p>

          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
  )
}