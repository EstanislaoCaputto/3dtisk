import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';
import ItemDetalle from './itemDetalle';

function ItemDetalleContenedor() {
    const {Referencia} = useParams();
    const [impresora, setImpresora] = useState([]);

    useEffect(()=>{
        const getImpresora = async () =>{
            let respuseta = await fetch(`https://3dtisk.com.ar/wp-json/wc/store/products/${Referencia}`)
            if(!respuseta.ok) {
                return;
            }
            let impres = await respuseta.json();
            setImpresora(impres)

        }
        getImpresora()
    },[Referencia])
    if(impresora.length===0){
        return(
            <div className='Cargador'>
                <Spinner animation='border' variant='info' size='lg' />
            </div>
        )
    }
    return(
        <>
            <ItemDetalle producto={impresora} />
        </>
    )
}

export default ItemDetalleContenedor;