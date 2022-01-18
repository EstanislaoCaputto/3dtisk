import { useEffect, useState } from 'react'
import api from '../db/woocomerce.js'
import './IdealPrincipiante.css'

export default function Principiantes(){
    const [impresoras, setImpresoras] = useState([])

    useEffect(()=>{
        api.get('products', {per_page:60}).then(resultado=>{
            setImpresoras(resultado.data)
        })
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