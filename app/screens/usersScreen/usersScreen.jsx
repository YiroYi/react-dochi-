import React from "react";
import "./usersScreen.css";
import UserCard from "./components/userCard.jsx";

export default function UsersScreen() {
  return (
      <div className="users-container">
        <h2>Lista de Usuarios</h2>

        <div className="users-list">
          {/* Ejemplos estáticos - ellos deben reemplazar con map */}
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
  );
}