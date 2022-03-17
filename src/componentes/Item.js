import { Link } from "react-router-dom"
import { Image, Button } from "react-bootstrap"
import './Item.css'




export default function Item({name, categories, images, prices, id, permalink}) {
    let imagen = images[0].src
    let categoria = categories[0].name
    let pre = parseInt(prices.price)/100
    
    return(
        <>
            <div className="container-productos card-group">
                <div className="imgProd">
                    <Image src={imagen} alt="imagen" className="card-img" fluid/>
                </div>

                <div className="container-info card-body">
                    <h2>{name}</h2>
                    <p>{categoria}</p>
                    <p className="precio"> ${pre.toLocaleString()}</p>
                    <div className="card-footer">
                        <a href={permalink} className="boton">
                            <Button variant="warning" className="boton">Ver</Button>
                        </a>
                        <Link to={`/producto/${id}`} className='btn btn-primary'>Detalle</Link>
                    </div>
                </div>

                
            </div>
        </>
    )
}