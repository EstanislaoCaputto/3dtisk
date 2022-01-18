import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import './IdealPrincipiante.css'

export default function Principiantes(){
    const [impresoras, setImpresoras] = useState([])

    useEffect(()=>{
        const getImpresoras = async () => {
            let response = await fetch('https://3dtisk.com.ar/wp-json/wc/store/products?per_page=100',{
                per_page:70
            })
            if(!response.ok) {
                return
            }
            const impre = await response.json()
            setImpresoras(impre)
            
        }
        getImpresoras()
        // buscarObjetos().then(r=>{
        //     let todo = r.obj.payload
        //     setImpresoras(todo)
        // })   
    },[])
    
    console.log(impresoras);
    let magna1 = impresoras[57]
    let ender3 = impresoras[53]
    let duplicator = impresoras[45]

    if(impresoras.length === 0){
        return(
            <div className='Cargador'>
                <Spinner animation='border' variant='info' size='lg'/>
                <h2>Cargando porfavor espere... </h2>
            </div>
        )
    }

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