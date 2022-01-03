import { Image } from "react-bootstrap"
import './Item.css'




export default function Item({name, prices, type, categories, images }) {
    
    let precio = (Number(prices.price)/100).toLocaleString('en-US')
    return(
        <>
            <div className="container-productos">
                <Image className="imgProd" src={images[0].src} rounded fluid />

                <div>
                    <h2>{name}</h2>
                    <p>Precio: ${precio}</p>
                    <ul>
                        <li><p>Tipo: {type}</p></li>
                        <li><p>Marca: {categories[0].name}</p></li>

                    </ul>
                </div>

            </div>
        </>
    )
}