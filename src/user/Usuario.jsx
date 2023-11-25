import React from "react";
import "./Usuario.css";

const Usuario = () => {
  return (
    <>
      <div className="user">
        <h2>Información de usuario</h2>
        <div className="info">
          <span id="Usuario">Usuario: Ángel</span>
          <span id="Id">ID: 6</span>
          <span id="Saldo">Saldo: $1000</span>
        </div>
      </div>
    </>
  );
};

export default Usuario;
