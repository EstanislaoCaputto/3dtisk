import { useContext, useEffect, useState } from 'react'
import UserContex from '../context/userContext'
import InicioSesion from './inicioSesion'
import './usuarioInterfaz.css'


export default function UsuarioInterfaz (){
    const {user} = useContext(UserContex)
    
    if(Object.entries(user).length === 0){
          
        return (
          <InicioSesion />
        );
    }else if(Object.entries(user).length !== 0){
        return(
            <div className="Contenedor-Usuario">
                <div className="datos">
                    <h3>Nombre: <br/> {user.Nombre}</h3>
                    <h3>Apellido</h3>
                    <h5>Email</h5>
                    <h5>Numero</h5>
                </div>
                <div className="foto">
                    imagen
                </div>
    
            </div>
        )

    }
    
}