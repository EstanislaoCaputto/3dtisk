import Facebook from './img/2091278_aa592ba15abbb0c38e70b745a8fed128.svg'
import Instagram from './img/social-media-free-black-icon-logo-file-free-vector.svg';
// import {Formik, Field, Form} from 'formik';
import './contactanos.css'
import { useContext, useEffect, useState } from 'react';
import UserContex from '../context/userContext';

function CrearCuenta() {
    let {AgregarUsuario, user} = useContext(UserContex)
    const[usuario, setUsuario] = useState({})
    
    const CrearCuenta = () => {
        let listo = AgregarUsuario(usuario);
        console.log('Usuario Registrado', user);

    }


    useEffect(()=>{
        let nombre = document.getElementById('nombre')
        let mail = document.getElementById('mail')
        let contraseña = document.getElementById('contraseña')
        let boton = document.getElementById('envia')
        
        //Evento de creacion de cuenta
        if(boton !== null){
            boton.addEventListener('click', e=>{
                e.preventDefault()
                setUsuario({
                    nombre: nombre.value,
                    mail: mail.value,
                    pass:contraseña.value
                })
    
            })
        }


    })

    if(user.length!==0 && user.nombre !== ""){
        return(
            <div>
                <h1>Bienvenido {user.nombre}</h1>
                <a href='/tienda/1'><button className='btn btn-primary'>Tienda</button></a>
            </div>
        )
    }


    return(
        <div className='Contacto'>
            <h1 className='titu'>Crea tu Cuenta</h1>
            <div className='contenedor-may'>
                <form className='contenedor'>

                    <label>Ingrese su Mail</label>
                    <input type='text' className='campo-text'id='mail' name='mail'></input>
                    <label>Ingrese su Nombre</label>
                    <input type='text' className='campo-text'id='nombre' name='nombre'></input>
                    <label>Elija una clave</label>
                    <input type='password' className='campo-text' id='contraseña' name='contraseña'></input>

                    <button type='submit' className='btn btn-primary' id='envia' onClick={CrearCuenta}>Crear Cuenta</button>

                </form>
            </div>
            
            
            <p>Presione el icono de la red por la que prefiere comunicarse</p>
            <div className='redes'>
                <a href='https://www.facebook.com/3dTisk.Cba'>
                    <img src={Facebook} alt="Facebook" className='logoFace'></img>
                </a>
                <a href='https://www.instagram.com/3dtisk.cba/'>
                    <img src={Instagram} alt="Instagram" className='logoIg'></img>
                </a>
            </div>
        </div>
    )
}

export default CrearCuenta;