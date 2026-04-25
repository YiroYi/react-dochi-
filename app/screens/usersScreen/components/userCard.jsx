import React from "react";
import "./userCard.css";

export default function UserCard() {
  return (
      <div className="user-card">
        <img
            src="https://via.placeholder.com/100"
            alt="user"
            className="user-image"
        />

        <div className="user-info">
          <h3>Nombre Usuario</h3>
          <p>email@ejemplo.com</p>
        </div>
      </div>
  );
}