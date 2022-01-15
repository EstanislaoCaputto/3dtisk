import { Image, Button } from "react-bootstrap"
import './Item.css'




export default function Item({name, categories, images, price, permalink}) {
    let imagen = images[0].src
    let categoria = categories[0].name
    let pre = parseInt(price).toLocaleString()
    
    return(
        <>
            <div className="container-productos">
                <div className="imgProd">
                    <Image src={imagen} alt="imagen" fluid/>
                </div>

                <div className="container-info">
                    <h2>{name}</h2>
                    <p>Precio: ${pre}</p>
                    <a href={permalink} className="boton">
                    <Button variant="warning" className="boton">Ver</Button>
                    </a>
                </div>

                
            </div>
        </>
    )
}