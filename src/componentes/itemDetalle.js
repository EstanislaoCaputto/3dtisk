import { Card } from "react-bootstrap";

function ItemDetalle({Nombre, PrecioNormal, Descripción, Imágenes }) {
    let nombre = Nombre.split('FDM')[1]
    let precio = PrecioNormal.toLocalString()
    let imagen = Imágenes.split(',')[0]
    
    return(
        <>
            
            <div className="container" >
                <Card>
                    <Card.Img variant="top" src={imagen} alt="ImagenProducto" />
                    <Card.Body>
                        <Card.Title>
                            {nombre}
                        </Card.Title>
                        <Card.Text>
                            {precio}
                        </Card.Text>
                        <Card.Text>
                            {Descripción}                               
                        </Card.Text>
                                               
                        
                        
                    </Card.Body>
                </Card>
            </div>

        
        </>
    )
}

export default ItemDetalle