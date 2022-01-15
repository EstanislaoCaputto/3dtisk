import impresora from './img/impresoras-fdm.jpg'
import impResina from './img/impresoras-dlp.jpg'
import filamentos from './img/filamentos.jpg'
import resina from './img/resinas.jpg'
import './ListaCategorias.css'

export default function ListaCategorias(){
    return(
        <div className="container">
            <div className="row-4 cont-categori">
                <div className="card-categori">
                    <img src={impresora} alt='Impresora FDM' className='img' />
                    <p className='titulo'>IMPRESORAS FDM</p>
                </div>
            </div>
            <div className="row-4 cont-categori">
                <div className="card-categori">
                    <img src={impResina} alt='Impresora FDM' className='img' />
                    <p className='titulo'>IMPRESORAS RESINA</p>
                </div>
            </div>
            <div className="row-4 cont-categori">
                <div className="card-categori">
                    <img src={filamentos} alt='Impresora FDM' className='img' />
                    <p className='titulo'>FILAMENTOS</p>
                </div>
            </div>
            <div className="row-4 cont-categori">
                <div className="card-categori">
                    <img src={resina} alt='Impresora FDM' className='img' />
                    <p className='titulo'>REPUESTOS</p>
                </div>
            </div>
        </div>
    )
}