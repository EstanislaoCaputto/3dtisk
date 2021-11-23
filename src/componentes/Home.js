import CarruselDeFotos from "./CarruselDeFotos";
import Pagos from "./Pagos";
import './home.css'

function Home() {
    return(
        <>
            <CarruselDeFotos/>
            <div className="separador"></div>
            <Pagos/>
            <div className="separador"></div>
        </>
    )
}

export default Home;