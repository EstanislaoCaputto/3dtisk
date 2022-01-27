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
    let hydraPlus = impresoras.find(elem=>elem.name==='Impresora 3D Hellbot Hidra Plus 300 Doble Extrusor Independiente FDM')
    let enderCr5Pro = impresoras.find(elem=>elem.name==='Impresora 3D Creality CR5 Pro')
    let artillerySWX1 = impresoras.find(elem=>elem.name==='Impresora Artillery Sidewinder X1')

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
                    <div className='desc-carru'>
                        <p>Con este equipo serás capaz de imprimir en simultaneo cualquier pieza que se adapte a la mesa, también realizar piezas en dos colores sin torre de purgado y la capacidad de imprimir en espejo. Su mesa tiene un tamaño de 300mm x 300mm x 350mm, drivers silenciosos, conexión wifi y pantalla táctil.</p>
                        <span>${(hydraPlus.prices.price / 100).toLocaleString()}</span>
                        <a href={hydraPlus.permalink}><button className='btn btn-primary'>Info</button></a>
                    </div>
                </div>
                <div className='principiantes'>
                    <h3>{enderCr5Pro.name.split('D')[1]}</h3>
                    <img src={enderCr5Pro.images[0].thumbnail} alt='magna1' className='imgPrinci'></img>
                    <div className='desc-carru'>
                        <p>Este equipo es fuertemente recomendado para la industria, debido a su cabina que ayuda a mantener una temperatura estable y sus terminaciones excepcionales. Cuenta con el eje z en la misma cama 300mm x 225mm x 380mm, lo que reduce mucho las vibraciones de la maquina, conexión wifi y pantalla táctil.</p>
                        <span>${(enderCr5Pro.prices.price / 100).toLocaleString()}</span>
                        <a href={enderCr5Pro.permalink}><button className='btn btn-primary'>Info</button></a>
                    </div>
                </div>
                <div className='principiantes'>
                    <h3>{artillerySWX1.name.split('a ')[1]}</h3>
                    <img src={artillerySWX1.images[0].thumbnail} alt='magna1' className='imgPrinci'></img>
                    <div className='desc-carru'>
                        <p>Nosotros catalogamos a este equipo como uno de los mas confiables. Sus terminaciones son increíbles, su mesa es muy solida y con su extrusión directa te garantiza una calidad perfecta. Cuenta con una mesa de 300mm x 300mm x 400mm, drivers silenciosos y pantalla táctil. Puerto USB para mandar impresiones.</p>
                        <span>${(artillerySWX1.prices.price / 100).toLocaleString()}</span>
                        <a href={artillerySWX1.permalink}><button className='btn btn-primary'>Info</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}