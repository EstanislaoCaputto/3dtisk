// import { useEffect, useState } from 'react'
import {Carousel, Image} from 'react-bootstrap'
import './carruselDeFotos.css'
import foto1 from './img/Ecofila-Naranja-1080x450-1-1024x427.jpg'


function CarruselDeFotos() {
    // const [promo, setPromo] = useState([])
    // useEffect(()=>{
    //     const getPromos = async ()=>{
    //         await fetch('http://localhost:8080/api/promos/',{
    //             mode: 'cors',
    //             method: 'GET',
    //             headers:{
    //                 Accept: 'application/json'
    //             }
    //         }).then(resultado=>{
    //             return resultado.json()
                
    //         }).then(json=>{
    //             setPromo(json)
    //         })
    //     }
    //     getPromos()
    // },[])
    
    return (
        <>

            <div className='elCarruFoto'>
                <Carousel>
                    <Carousel.Item>
                        <Image
                            className="imgFilamento"
                            src={foto1}
                            alt="filamento"
                            fluid
                        />
                        <Carousel.Caption>
                            <h3>Que hacemo?</h3>
                            <p>Vamo a la bu rar</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="imgFilamento"
                            src={foto1}
                            alt="filamento"
                            fluid
                        />
                        <Carousel.Caption>
                            <h3>Podes poner un titulo chico</h3>
                            <p>Cualquier cosa podes escribir aca</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="imgFilamento"
                            src={foto1}
                            alt="filamento"
                            fluid
                        />
                        <Carousel.Caption>
                            <h3>Esto es otra foto</h3>
                            <p>tercer carrusel</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>


        </>
    )
}

export default CarruselDeFotos;