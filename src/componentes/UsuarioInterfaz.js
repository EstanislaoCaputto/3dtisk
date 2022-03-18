import { useContext, useEffect, useState } from 'react'
import UserContex from '../context/userContext'
import InicioSesion from './inicioSesion'
import './usuarioInterfaz.css'


export default function UsuarioInterfaz (){
    const {user, imagUser} = useContext(UserContex)
    
    if(Object.entries(user).length === 0){
          
        return (
          <InicioSesion />
        );
    }else if(Object.entries(user).length !== 0){
        return(
            <div className="Contenedor-Usuario">
                <div className="datos">
                    <h3>Nombre: {user.Nombre}</h3>
                    <h3>Apellido:  {user.Apellido}</h3>
                    <h5>Email:  {user.Mail}</h5>
                    <h5>Numero: {user.Telefono}</h5>
                </div>
                <div className="foto">
                    <img src={imagUser} alt='avatar' />
                    <button className='btn btn-primary'>Cerrar Sesion</button>
                </div>
    
            </div>
        )

    }
    
}