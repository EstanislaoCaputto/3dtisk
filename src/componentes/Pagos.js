import './pagos.css'
import { Image } from 'react-bootstrap';
import Envios from './img/Envio-abajo_Gris.png';
import Tarjetas from './img/Visa-y-Maste-abajor_Gris.png';
import Ahora from './img/Ahora-12y18_Gris.png'
function Pagos() {
    return(
        <>
            <div className="Pagos">
                <div className='envios'>
                    <Image src={Envios} alt='envios' fluid></Image>
                </div>
                <div className='tarjetas'>
                <Image src={Tarjetas} alt='tarjetas' fluid></Image>
                </div>
                <div className='ahora'>
                <Image src={Ahora} alt='Ahora 12 y 18' fluid></Image>
                </div>
            </div>
        </>
    )
}
export default Pagos;