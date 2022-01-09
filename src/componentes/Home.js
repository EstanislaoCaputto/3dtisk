import CarruselDeFotos from "./CarruselDeFotos.js";
import Pagos from "./Pagos.js";
import './home.css'
import ItemList from "./itemList.js";

function Home() {
    return(
        <>
            <CarruselDeFotos/>
            <div className="separador"></div>
            <Pagos/>
            <div className="separador"></div>
            <ItemList/>
            <div className="separador"></div>
        </>
    )
}

export default Home;