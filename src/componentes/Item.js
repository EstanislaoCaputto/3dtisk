import { Image, Button } from "react-bootstrap"
import './Item.css'




export default function Item({Nombre, Tipo, Categorías, Imágenes, PrecioNormal}) {
    let imagen = Imágenes
    let picture = imagen.split(',')[0]
    let categoria = Categorías.split('>')[1].split(',')[0]
    let precio = PrecioNormal.toLocaleString()
    
    return(
        <>
            <div className="container-productos">
                <div className="imgProd">
                    <Image src={picture} alt="imagen" fluid />
                </div>

                <div className="container-info">
                    <h2>{Nombre}</h2>
                    <p>Precio: ${precio}</p>
                    <ul>
                        <li><p>Tipo: {Tipo}</p></li>
                        <li><p>Marca: {categoria}</p></li>
                    </ul>
                    <Button variant="warning" className="boton">Comprar</Button>
                    
                </div>

                
            </div>
        </>
    )
}