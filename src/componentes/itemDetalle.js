import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import imagMock from './img/Ender-3-Max-izq.png'

function ItemDetalle({producto}) {
    const [ activado, setActivado] = useState(false);
    

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
                            <h2>Impresora 3D</h2>
                            <p>$ 63.650</p>
                        </Card.Title>
                        <Card.Text>
                            <p>Descripción del producto
PREVENTA EXCLUSIVA CON ENTREGA EN LA PRIMER QUINCENA DE OCTUBRE
La Ender-3 MAX es una nueva variante que continúa la evolución de la Ender-3, pero llevada al gran formato permitiendo un volumen de impresión mucho mayor, ademas de adoptar algunas mejoras que se fueron desarrollando en otros modelos como Cr-X y Ender-3 v2, convirtiendo a esta nueva Ender-3 Max una poderosa herramienta para los makers de todos los niveles.

GARANTA
6 Meses
Soporte técnico post venta gratuito</p>
                            
                                                                       
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