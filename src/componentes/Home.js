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
    
    useEffect(()=>{
        let fetchProductos = async (nombre,seteo) =>{
            let products1 = await api.get('products',{search:nombre})
            .then(respu=>{
                seteo(respu.data)
            })
            .catch((error)=> {
                console.log(error)
            })
            
        }
        fetchProductos('Impresora 3D Artillery Genius Pro 220x220x250mm FDM', setProd1)
        fetchProductos('Impresora 3D Artillery Sidewinder X2', setProd2)
        fetchProductos('Impresora 3D Hellbot Hidra Plus 300', setProd3)
        fetchProductos('Impresora Creality Ender 6 Dytkit FDM', setProd4)
        fetchProductos('Impresora 3D Creality Ender-7 FDM', setProd5)
        fetchProductos('Impresora 3D Hellbot Magna 2 400 FDM Dykit', setProd6)
        fetchProductos('Impresora 3D Hellbot Magna 2 500 FDM Dykit', setProd7)
        fetchProductos('Impresora 3D Hellbot Magna 2 300 Dykit', setProd8)
        fetchProductos('Impresora 3D Artillery Genius Pro', setProd9)
        fetchProductos('Impresora FDM Trimaker Nebula', setProd10)
        fetchProductos('Biqu B1', setProd11)
        fetchProductos('Impresora 3D Creality Ender 2 Pro FDM', setProd12)
        fetchProductos('Impresora 3D Hellbot Hidra Plus 300', setProd13)
        fetchProductos('Impresora 3D Creality Ender 3 pro', setProd14)
        fetchProductos('Impresora 3D Creality Ender 2 pro', setProd15)
        fetchProductos('Impresora 3D Hellbot Magna 2 230', setProd16)
        fetchProductos('Impresora 3D Creality Ender v2 ', setProd17)

    },[])
    
    if(prod1.length===0||prod2.length===0||prod3.length===0||prod4.length===0||prod5.length===0||prod6.length===0||prod7.length===0){
        return(
            <div className='Cargador'>
                <Spinner animation='border' variant='info' size='lg' />
            </div>
        )   
    }
    if(prod8.length===0 || prod9.length===0 || prod10.length===0 || prod11.length===0 ||prod12.length===0 ||prod13.length===0){
        return(
            <div className='Cargador'>
                <Spinner animation='border' variant='info' size='lg' />
            </div>
        )
    }
    if(prod14.length===0||prod15.length===0||prod16.length===0||prod17.length===0){
        return(
            <div className='Cargador'>
                <Spinner animation='border' variant='info' size='lg' />
            </div>
        )   
    }
    let box1=[prod1[0],prod2[0],prod3[0],prod4[0],prod5[0],prod6[0]]
    let box2=[prod7[1],prod8[0],prod9[0],prod10[0],prod11[0],prod12[0]]
    let box3=[prod14[4],prod15[0],prod16[0],prod17[1],prod14[5],prod14[0]]
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
        </>
    )
}

export default Home;

// Lo ultimo en el mercado Hidra Plus Artillery genius pro artillery sw x2 ender 6 ender 7 magna 400 magna 500
// Lo mas vendido Magna 2 300 Artillery Genius Pro Ender 2 Pro Hidra 300 plus trimaker Nebula Biqu b1
// Para principiantes y emprendedores Ender 3 pro Ender 2 pro Magna 2 230 Ender v2 ender 3 
// Resinas todas