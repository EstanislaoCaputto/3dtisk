import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import imagMock from './img/Ender-3-Max-izq.png'

function ItemDetalle() {
    const [ activado, setActivado] = useState(false);
    
    useEffect(()=>{
        const getProductos = async () =>{}
    },[])

    const onAdd=(Contar)=>{
       alert('Comprado');
    }
    const AgregarCarrito=()=>{
        setActivado(true);
        alert('Agregado')
    }

    return(
        <>
            
            <div className="container" style={{width:'350px'}}>
                <Card>
                    <Card.Img variant="top" src={imagMock} alt="ImagenProducto" />
                    <Card.Body>
                        <Card.Title>
                            
                        </Card.Title>
                        <Card.Text>
                                                                       
                        </Card.Text>
                                               
                        {!activado ?
                        <>
                        <button className="btn btn-warning" onClick={onAdd}>Comprar</button>
                        <button className="btn btn-warning" onClick={AgregarCarrito}>Agregar al carro</button>
                        </>
                        :
                        <>
                        <Link className="btn btn-success" to="/">Terminar Compra</Link>
                        <Link className="btn btn-primary" to="/">Volver a Items</Link>
                        </>
                        }
                        
                    </Card.Body>
                </Card>
            </div>

        
        </>
    )
}

export default ItemDetalle