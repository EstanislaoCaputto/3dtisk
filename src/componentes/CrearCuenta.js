import Facebook from './img/2091278_aa592ba15abbb0c38e70b745a8fed128.svg'
import Instagram from './img/social-media-free-black-icon-logo-file-free-vector.svg';
// import {Formik, Field, Form} from 'formik';
import './crearCuenta.css'
import { useContext, useEffect, useState } from 'react';
import UserContex from '../context/userContext';

function CrearCuenta() {
    let {AgregarUsuario, user} = useContext(UserContex)
    const[usuario, setUsuario] = useState({})
    
    const CrearCuenta = () => {
        AgregarUsuario(usuario);
        console.log('Usuario Registrado', usuario);

    }


    useEffect(()=>{
        let nombre = document.getElementById('nombre')
        let apellido = document.getElementById('apellido')
        let mail = document.getElementById('mail')
        let contraseña = document.getElementById('contraseña')
        let telefono = document.getElementById('telefono')
        let edad = document.getElementById('edad')
        let boton = document.getElementById('envia')
        
        //Evento de creacion de cuenta
        if(boton !== null){
            boton.addEventListener('click', e=>{
                e.preventDefault()
                let unUsuario ={
                    Nombre: nombre.value,
                    Apellido: apellido.value,
                    Mail: mail.value,
                    Contraseña: contraseña.value,
                    Telefono:telefono.value,
                    Edad:edad.value
                }
                setUsuario(unUsuario)
            })
        }


    })

    return(
        <div className='CrearCuenta'>
            <h1 className='titu'>Crea tu Cuenta</h1>
            <div className='contenedor-may'>
                <form className='contenedor'>

                    <label>Ingrese su Mail</label>
                    <input type='text' className='campo-texto'id='mail' name='mail'></input>
                    <label>Ingrese su Nombre</label>
                    <input type='text' className='campo-texto'id='nombre' name='nombre'></input>
                    <label>Ingrese su Apellido</label>
                    <input type='text' className='campo-texto'id='apellido' name='apellido'></input>
                    <label>Elija una clave</label>
                    <input type='password' className='campo-texto' id='contraseña' name='contraseña'></input>
                    <label>Ingrese su Telefono</label>
                    <input type='number' className='campo-texto'id='telefono' name='telefono'></input>
                    <label>Ingrese su Edad</label>
                    <input type='number' className='campo-texto'id='edad' name='edad'></input>


                    <button type='submit' className='btn btn-primary' id='envia' onClick={CrearCuenta}>Crear Cuenta</button>

                </form>
            </div>
            
        </div>
    )
}

export default CrearCuenta;