import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'

export default function SiguienteNivel(){
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
    let hydraPlus = impresoras[21]
    let enderCr5Pro = impresoras[31]
    let artillerySWX1 = impresoras[58]

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
            <h2>Tus Impresiones en otro Nivel!!</h2>
            <div className='idealPrinci'>

                <div className='principiantes'>
                    <h3>{hydraPlus.name.split('D')[1]}</h3>
                    <img src={hydraPlus.images[0].thumbnail} alt='magna1' className='imgPrinci'></img>
                </div>
                <div className='principiantes'>
                    <h3>{enderCr5Pro.name.split('D')[1]}</h3>
                    <img src={enderCr5Pro.images[0].thumbnail} alt='magna1' className='imgPrinci'></img>
                </div>
                <div className='principiantes'>
                    <h3>{artillerySWX1.name.split('a ')[1]}</h3>
                    <img src={artillerySWX1.images[0].thumbnail} alt='magna1' className='imgPrinci'></img>
                </div>
            </div>
        </div>
    )
}