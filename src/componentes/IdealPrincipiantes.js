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
    let magna1 = impresoras.find(elem => elem.name==='Impresora 3D Hellbot Magna 1')
    let ender3 = impresoras.find(elem => elem.name==='Impresora 3D Creality Ender 3 Pro')
    let duplicator = impresoras.find(elem => elem.name==='Impresora 3d I3 Mini Wanhao')
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

                <div className='principiantes'>
                    <h3>{magna1.name.split('D ')[1]}</h3>
                    <img src={magna1.images[0].src} alt='magna1' className='imgPrinci'></img>
                    <div className='desc-carru'>
                        <p>Este equipo es de lo mas vendidos en el mercado para cualquier Makers que quiera iniciarse en el mundo de las impresoras 3D, un costo muy optimizado que forma un gran equipo. Una mesa de 220mm x 220mm x 260mm, También cuenta con la capacidad de incorporarle mejoras como los drivers silenciosos.</p>
                        <span>${((magna1.prices.price) / 100).toLocaleString()}</span>
                        <a href={magna1.permalink}><button className='btn btn-primary'>Info</button></a>
                    </div>
                </div>
                <div className='principiantes'>
                    <h3>{ender3.name.split('D ')[1]}</h3>
                    <img src={ender3.images[0].src} alt='magna1' className='imgPrinci'></img>
                    <div className='desc-carru'>
                        <p>Una gran opción para iniciarse en la impresión 3D. Cuenta con algunas comodidades extra con respecto a otras maquinas de su nivel. Como su mesa magnética, esta te permitirá despegar la pieza con mayor facilidad debido a su gran flexibilidad, a su vez será mas pausada la calibración de la cama.</p>
                        <span>${((ender3.prices.price) / 100).toLocaleString()}</span>
                        <a href={ender3.permalink}><button className='btn btn-primary'>Info</button></a>
                    </div>
                </div>
                <div className='principiantes'>
                    <h3>{duplicator.name.split('d ')[1]}</h3>
                    <img src={duplicator.images[0].src} alt='magna1' className='imgPrinci'></img>
                    <div className='desc-carru'>
                        <p>Recomendamos este equipo para niños que quieran imprimir algunos modelos simples y pequeños. La maquina viene armada casi por completo desde fabrica. Este equipo imprime PLA, cuenta con una mesa de 120mm x 135mm x 100mm. Calibración muy simple desde computadora.</p>
                        <span>${((duplicator.prices.price) / 100).toLocaleString()}</span>
                        <a href={duplicator.permalink}><button className='btn btn-primary'>Info</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}