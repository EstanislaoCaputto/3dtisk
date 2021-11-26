import { Image } from "react-bootstrap"
import './Item.css'




export default function Item({titulo, precio, tipo, marca, garantia, dimensiones,descripicion, stock, codigo, imagen }) {
    
    return(
        <>
            <div className="container">
                <Image className="imgProd" src="https://3dtisk.com.ar/wp-content/uploads/2021/06/Trimaker-Nebula.jpeg" rounded fluid/>
                <div className="contProd col-6">
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
                    <h3>Descripcion:</h3>
                    <p>{descripicion}</p>
                </div>
            </div>
        </>
    )
}