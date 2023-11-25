import { useState } from "react";
import "./login.css";

function Login() {
  return (
    <>
      <div className="entrada">
        <h2>Ingrese sus datos a continuación</h2>
        <div className="inputs">
          <div className="data">
            <span>Usuario</span>
            <input type="text" placeholder="Ingrese su usuario" />
          </div>

          <div className="data">
            <span>Contraseña</span>
            <input type="text" placeholder="Ingrese su contraseña" />
          </div>
        </div>

        <button type="submit" id="ingreso">Subir</button>
      </div>
    </>
  );
}

export default Login;
