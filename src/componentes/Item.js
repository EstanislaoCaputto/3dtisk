import { Image } from "react-bootstrap"
import './Item.css'




export default function Item({name, prices, type, categories, description, images }) {
    
    return(
        <>
            <div className="container-productos">
                <Image className="imgProd" src={images[0].src} rounded fluid/>
                <div className="contProd col-6">
                    <div className="contInfo">
                        <h2>{name}</h2>
                        <span>${prices.price}</span>
                        <ul>
                            <li><p>Tipo: {type}</p></li>
                            <li><p>Marca: {categories[0].name}</p></li>
                            
                        </ul>
                    </div>
                    <div className="contDesc">
                        <h3>Descripcion:</h3>
                        <div id='desc'>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divisor"></div>
            
        </>
    )
}