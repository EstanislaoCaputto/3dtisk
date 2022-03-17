import { useContext, useEffect } from "react";
import UserContex from "../context/userContext";

export default function InicioSesion() {
    const {IniciarSesion} = useContext(UserContex)
    useEffect(() => {
      let name = document.getElementById("usuario");
      let contra = document.getElementById("password");
      let enviar = document.getElementById("submit");

      enviar.addEventListener("click", (e) => {
        e.preventDefault();
        let usuario = {
          Nombre: name.value,
          Contraseña: contra.value,
        };
        IniciarSesion(usuario);
        console.log(usuario);
      });
    });
    return(

    <div className="Contenedor-Usuario">
        <div className="nombreusuario">
            <input
                name="usuario"
                id="usuario"
                placeholder="Nombre de Usuario o email"
            ></input>
            <input
                name="password"
                id="password"
                placeholder="Contraseña"
                type="password"
            ></input>
            <input type="submit" id="submit"></input>
        </div>
    </div>
    )
}