import { Link } from "react-router-dom"
import { Image, Button } from "react-bootstrap"
import './Item.css'




export default function Item({name, categories, images, prices, id, permalink}) {
    let imagen = images[0].src
    let categoria = categories[0].name
    let pre = parseInt(prices.price)/100
    
    return(
        <>
            <div className="container-productos">
                <div className="imgProd">
                    <Image src={imagen} alt="imagen" fluid/>
                </div>

                <div className="container-info">
                    <h2>{name}</h2>
                    <p>{categoria}</p>
                    <p>Precio: ${pre.toLocaleString()}</p>
                    <a href={permalink} className="boton">
                    <Button variant="warning" className="boton">Ver</Button>
                    </a>
                    <Link to={`/producto/${id}`} className='btn btn-primary'>Detalle</Link>
                </div>

                
            </div>
        </>
    )
}