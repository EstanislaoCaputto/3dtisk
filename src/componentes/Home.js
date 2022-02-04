import { useState, useEffect } from "react";
import api from '../db/woocomerce.js'
import CarruselDeFotos from "./CarruselDeFotos.js";
import Pagos from "./Pagos.js";
import './home.css'
import {Spinner} from 'react-bootstrap'
import CarruEstandar from "./CarruselEstandar.js";



function Home() {
    const [prod1, setProd1] = useState([])
    const [prod2, setProd2] = useState([])
    const [prod3, setProd3] = useState([])
    const [prod4, setProd4] = useState([])
    const [prod5, setProd5] = useState([])
    const [prod6, setProd6] = useState([])
    const [prod7, setProd7] = useState([])
    
    useEffect(()=>{
        let fetchProductos = (nombre,seteo) =>{
            let products1 = api.get('products',{search:nombre})
            .then(respu=>{
                seteo(respu.data)
            })
            .catch(err=>{console.log(err.response)})
            
        }
        fetchProductos('Impresora 3D Artillery Genius Pro 220x220x250mm FDM', setProd1)
        fetchProductos('Impresora 3D Artillery Sidewinder X2', setProd2)
        fetchProductos('Impresora 3D Hellbot Hidra Plus 300', setProd3)
        fetchProductos('Impresora Creality Ender 6 Dytkit FDM', setProd4)
        fetchProductos('Impresora 3D Creality Ender-7 FDM', setProd5)
        fetchProductos('Impresora 3D Hellbot Magna 2 400 FDM Dykit', setProd6)
        fetchProductos('Impresora 3D Hellbot Magna 2 500 FDM Dykit', setProd7)
    },[])
    
    if(prod1.length===0||prod2.length===0||prod3.length===0||prod4.length===0||prod5.length===0||prod6.length===0||prod7.length===0){
        return(
            <div className='Cargador'>
                <Spinner animation='border' variant='info' size='lg' />
            </div>
        )   
    }

    return(
        <>
            <CarruselDeFotos/>
            <div className="separador"></div>
            <Pagos/>
            <div className="separador"></div>
            <CarruEstandar Producto1={prod1} Producto2={prod2} Producto3={prod3} Producto4={prod4} Producto5={prod5} Producto6={prod6} Producto7={prod7} titulo='Lo ultimo en el mercado' /> 
            <div className="separador"></div>
            {/* <Principiantes />
            <div className="separador"></div>
            <SiguienteNivel />
            <div className="separador"></div>
            <ListaCategorias/>
            <div className="separador"></div> */}
        </>
    )
}

export default Home;