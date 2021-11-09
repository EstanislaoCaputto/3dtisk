import logo from './img/Logo-color_gris-180x180-1.png'
import './Cabecera.css';

function Cabecera() {
    return(
        <div className='Cabeceras'>
            <div className="Logo">
            <img src={logo} alt="Logo"></img>
            </div>
            <div className='ubicacion'>
            <ul>
                <li>
                    Local 31 | Hiper Libertad Rodriguez del Busto | Ciudad de Córdoba
                </li>
                <li>
                    Oficina | Italia 1963 PB Oficina | B° Villa Cabrera | Ciudad de Córdoba
                </li>
            </ul>
            </div>
            <div className='contactos'>
            <ul>
                <li>
                    <> +54 9 3515524118</>
                </li>
                <li>
                    <>+54 9 3513499824 </>
                </li>
                <li>
                    <>3dtisk.cba@gmail.com </>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Cabecera;