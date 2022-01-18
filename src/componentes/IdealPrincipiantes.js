import { useEffect, useState } from 'react'
import api from '../db/woocomerce.js'
import './IdealPrincipiante.css'

export default function Principiantes(){
    const [impresoras, setImpresoras] = useState([])

    useEffect(()=>{
        const getProductos = async () => {//'https://servidor-3dtisk.herokuapp.com/api/productos', 'http://localhost:8080/api/productos', 'https://3dtisk.com.ar/wp-json/wc/store/products'
            let response = await fetch('https://3dtisk.com.ar/wp-json/wc/store/products?per_page=100',{
                method:'GET'
               
            })
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
            const posts = await response.json();
            setImpresoras(posts)
            
        }
        getProductos();
    },[])
    let magna1 = impresoras[57]
    let ender3 = impresoras[53]
    let duplicator = impresoras[45]
    return(
        <div className='contPrinci'>
            <h2>Ideal para principiantes</h2>
            <div className='idealPrinci'>

                <div className='principiantes col-3'>
                    <h3>{magna1.name}</h3>
                    <img src={magna1.images[0].src} alt='magna1' className='imgPrinci'></img>
                </div>
                <div className='principiantes col-3'>
                    <h3>{ender3.name}</h3>
                    <img src={ender3.images[0].src} alt='magna1' className='imgPrinci'></img>
                </div>
                <div className='principiantes col-3'>
                    <h3>{duplicator.name}</h3>
                    <img src={duplicator.images[0].src} alt='magna1' className='imgPrinci'></img>
                </div>
            </div>
        </div>
    )
}