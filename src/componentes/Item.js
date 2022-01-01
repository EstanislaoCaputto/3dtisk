import { Image } from "react-bootstrap"
import './Item.css'




export default function Item({titulo, precio, tipo, marca, garantia, dimensiones,descripcion, stock, codigo, imagen }) {
    
    return(
        <>
            <div className="container-productos">
                <Image className="imgProd" src={imagen} rounded fluid/>
                <div className="contProd col-6">
                    <div className="contInfo">
                        <h2>{titulo}</h2>
                        <h4>{dimensiones}</h4>
                        <span>${precio}</span>
                        <ul>
                            <li><p>Tipo: {tipo}</p></li>
                            <li><p>Marca: {marca}</p></li>
                            <li><p>Garantia: {garantia}</p></li>

                            <li><p>Codigo {codigo}</p></li>
                        </ul>
                        <span>Disponibilidad {stock}</span>
                    </div>
                    <div className="contDesc">
                        <h3>Descripcion:</h3>
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div>
            <div className="divisor"></div>
        </>
    )
}