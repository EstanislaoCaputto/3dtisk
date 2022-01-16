import Facebook from './img/2091278_aa592ba15abbb0c38e70b745a8fed128.svg'
import Instagram from './img/social-media-free-black-icon-logo-file-free-vector.svg';
// import {Formik, Field, Form} from 'formik';
import './contactanos.css'

function Contactar() {
    return(
        <div className='Contacto'>
            <h1 className='titu'>CONTACTANOS</h1>
            <div className='contenedor-may'>
                <form className='contenedor'>
                    <fieldset className='contenedor'>
                        <label>Ingrese su Mail</label>
                        <input type='text' className='campo-text'></input>
                        <label>Ingrese su Nombre</label>
                        <input type='text' className='campo-text'></input>
                    </fieldset>
                    <fieldset className='contenedor'>
                        <label>Dejanos tu mensaje!!</label>
                        <textarea name='mensaje' className='campo-text'></textarea>
                    </fieldset>
                    
                    <input type='submit'></input>
                    
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

export default Contactar;

{/* <h1>Crear Usuario</h1>
<div>
<Formik
    initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        tel:'',
    }}
    onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
    }}
>
    <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Juanse" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Alekian" />

        <label htmlFor="email">Email</label>
        <Field
            id="email"
            name="email"
            placeholder="juanse@mail.com"
            type="email"
        />
        <button type="submit">Submit</button>
    </Form>
</Formik>
</div> */}
{/* https://www.creativosonline.org/formularios-css-html.html */}