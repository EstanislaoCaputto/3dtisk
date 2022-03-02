import { useState, useEffect } from "react";
// import api from '../db/woocomerce.js'
import CarruselDeFotos from "./CarruselDeFotos.js";
import Pagos from "./Pagos.js";
import './home.css'
import {Spinner} from 'react-bootstrap'
import CarruEstandar from "./CarruselEstandar.js";
import Logos from "./logos.js";
import Horarios from "./Horarios.js";


function Home() {
    const [prod1, setProd1] = useState([])
    const [prod2, setProd2] = useState([])
    const [prod3, setProd3] = useState([])
    const [prod4, setProd4] = useState([])
    const [prod5, setProd5] = useState([])
    const [prod6, setProd6] = useState([])
    const [prod7, setProd7] = useState([])
    const [prod8, setProd8] = useState([])
    const [prod9, setProd9] = useState([])
    const [prod10, setProd10] = useState([])
    const [prod11, setProd11] = useState([])
    const [prod12, setProd12] = useState([])
    const [prod13, setProd13] = useState([])
    const [prod14, setProd14] = useState([])
    const [prod15, setProd15] = useState([])
    const [prod16, setProd16] = useState([])
    const [prod17, setProd17] = useState([])
    const [prod18, setProd18] = useState([])
    
    useEffect(()=>{
        let fetchProductos = async (nombre,seteo) =>{
            let products = await fetch(`https://3dtisk.com.ar/wp-json/wc/store/products?search=${nombre}`)
            if (!products.ok) {
                console.log('Rejected');
            }
            let pd = await products.json()
            seteo(pd)
            // api.get('products',{search:nombre})
            // .then(respu=>{
            //     seteo(respu.data)
            // })
            // .catch((error)=> {
            //     console.log(error)
            // })
            
        }
        fetchProductos('Impresora 3D Artillery Genius Pro 220x220x250mm FDM', setProd1)
        fetchProductos('Impresora 3D Artillery Sidewinder X2', setProd2)
        fetchProductos('Impresora 3D Hellbot Hidra Plus 300', setProd3)
        fetchProductos('Impresora Creality Ender 6 Dytkit FDM', setProd4)
        fetchProductos('Impresora 3D Creality Ender-7 FDM', setProd5)
        fetchProductos('Impresora 3D Hellbot Magna 2 400 FDM Dykit', setProd6)
        fetchProductos('Impresora 3D Hellbot Magna 2 500 FDM Dykit', setProd7)
        fetchProductos('Impresora Hellbot Magna 2 300 Dykit', setProd8)
        fetchProductos('Impresora 3D Artillery Genius Pro', setProd9)
        fetchProductos('Impresora FDM Trimaker Nebula', setProd10)
        fetchProductos('Biqu B1', setProd11)
        fetchProductos('Impresora 3D Creality Ender 2 Pro FDM', setProd12)
        fetchProductos('Impresora 3D Hellbot Hidra Plus 300', setProd13)
        fetchProductos('Impresora 3D Creality Ender 3 pro', setProd14)
        fetchProductos('Impresora 3D Creality Ender 2 pro', setProd15)
        fetchProductos('Impresora Hellbot Magna 2 230 Dykit', setProd16)
        fetchProductos('Impresora Creality Ender 3 V2', setProd17)
        fetchProductos('Preventa Impresora Hellbot Magna SE FDM', setProd18)

    },[])
    
    if(prod1.length===0||prod2.length===0||prod3.length===0||prod4.length===0||prod5.length===0||prod6.length===0||prod7.length===0||prod14.length===0||prod15.length===0||prod16.length===0||prod17.length===0||prod8.length===0 || prod9.length===0 || prod10.length===0 || prod11.length===0 ||prod12.length===0 ||prod13.length===0||prod14===0||prod15===0||prod16===0||prod17===0||prod18===0){
        return(
            <div className='Cargador'>
                <Spinner animation='border' variant='info' size='lg' />
            </div>
        )   
    }


    let box1=[prod1,prod2,prod3,prod4,prod5,prod6]
    let box2=[prod7,prod8,prod9,prod10,prod11,prod12]
    let box3=[prod15,prod14,prod13,prod16,prod17]
    return(
        <>
            <CarruselDeFotos/>
            <div className="separador"></div>
            <Pagos/>
            <div className="separador"></div>
            <CarruEstandar ArrayProductos={box1} titulo='Lo Último en el Mercado' /> 
            <div className="separador"></div>
            <CarruEstandar ArrayProductos={box2} titulo='Lo más Vendido'/>
            <div className="separador"></div>
            <CarruEstandar ArrayProductos={box3} titulo='¡Para Principiantes y Emprendedores!'/>
            <div className="separador"></div>
            <Logos />
            <div className="separador"></div>
            <div className="mapa">
                <h4>Encontra nuestro local en el Paseo Libertad</h4>
                <iframe title="mapaGoogle" className="mapaGogle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9635.96273764556!2d-64.22182546080685!3d-31.363736886975694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299162568deb9%3A0xb8860289c0db0681!2sPaseo%20LIBERTAD%20%E2%80%93%20Lugones%20%7C%20Grupo%20Casino!5e0!3m2!1ses!2sar!4v1645031361764!5m2!1ses!2sar" loading="lazy"></iframe>
            </div>
            <div className="separador"></div>
            <Horarios horasLocal={'10am a 9pm'} horasOficina={'9am a 6pm'} diasLocal={'Lunes a Domingo'} diasOficina={'Lunes a Viernes'} />
            <div className="separador"></div>
        </>
    )
}

export default Home;

// Lo ultimo en el mercado Hidra Plus Artillery genius pro artillery sw x2 ender 6 ender 7 magna 400 magna 500
// Lo mas vendido Magna 2 300 Artillery Genius Pro Ender 2 Pro Hidra 300 plus trimaker Nebula Biqu b1
// Para principiantes y emprendedores Ender 3 pro Ender 2 pro Magna 2 230 Ender v2 ender 3 
// Resinas todas