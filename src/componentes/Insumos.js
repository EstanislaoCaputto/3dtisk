import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Item from "./Item";

export default function Insumos(){
    const [impresoras, setImpresoras] = useState([])

    useEffect(()=>{
        const getImpresora = async () => {
            let response = await fetch('https://3dtisk.com.ar/wp-json/wc/store/products?per_page=100', {
                per_page: 60

            })
            if (!response.ok) {
                return;
            }
            const posts = await response.json();
            setImpresoras(posts)
        }
        getImpresora()
    })
    let insumos = []
    impresoras.forEach(elem =>{
        let categoria = elem.categories[0]
        if (typeof(categoria) === 'object'){
            let res = categoria
            if(res.name.includes('Insumos') || res.name.includes('Filamentos')) insumos.push(elem)
        }
        
        
    })
    
    

    
    if (insumos.length === 0){
        return (
            <>
                <div className='Cargador'>
                    <Spinner animation="border" variant="info" size='lg'/>
                    <h1>Cargando, por favor espere... </h1>
                </div>
            </>
        )
    }
    return(
        <div className="lista">
            {insumos.map((impresora)=>(
                <Item key={impresora.id} {...impresora} />
            ))}
        </div>
    )
}