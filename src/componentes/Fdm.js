import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Item from "./Item";

export default function Fdm(){
    const [impresoras, setImpresoras] = useState([])

    useEffect(()=>{
        const getImpresora = async () => {
            let response = await fetch('https://3dtisk.com.ar/wp-json/wc/store/products?per_page=100', {
                per_page: 60

            })
            if (!response.ok) {
                // oups! something went wrong
                return;
            }
            const posts = await response.json();
            setImpresoras(posts)
        }
        getImpresora()
    })
    let fdm = []
    impresoras.forEach(element => {
        if(element.name.includes('FDM')) fdm.push(element)
    });
    if (fdm.length === 0){
        return (
            <>
                <div className='Cargador'>
                    <Spinner animation="border" variant="info" size='lg'/>
                    <h1>Cargando, porfavor espere... </h1>
                </div>
            </>
        )
    }
    return(
        <div className="lista">
            {fdm.map((impresora)=>(
                <Item key={impresora.id} {...impresora} />
            ))}
        </div>
    )
}