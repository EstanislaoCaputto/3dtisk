import Facebook from './img/2091278_aa592ba15abbb0c38e70b745a8fed128.svg'
import Instagram from './img/social-media-free-black-icon-logo-file-free-vector.svg';
// import {Formik, Field, Form} from 'formik';
import './contactanos.css'

function CrearCuenta() {
    return(
        <div className='Contacto'>
            <h1 className='titu'>Crea tu Cuenta</h1>
            <div className='contenedor-may'>
                <form className='contenedor'>

                    <label>Ingrese su Mail</label>
                    <input type='text' className='campo-text'></input>
                    <label>Ingrese su Nombre</label>
                    <input type='text' className='campo-text'></input>
                    <label>Elija una clave</label>
                    <input type='password'></input>

                    <input type='submit' className='btn btn-primary' value='Crear Cuenta'></input>

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