// import { useEffect, useState } from 'react'
import {Carousel, Image} from 'react-bootstrap'
import './carruselDeFotos.css'
import foto1 from './img/Flyer fil 3N3.jpg'
import foto2 from './img/Flyer fil grilon.jpg'
import foto3 from './img/summer-fest-nuevos-modelos-desktop.jpg'
import foto4 from './img/EditadoSummerfest 2 sin sombra.jpg'
import foto5 from './img/Summerfest 2 con sombra.jpg'


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
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="imgFilamento"
                            src={foto2}
                            alt="filamento"
                            fluid
                            
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="imgFilamento"
                            src={foto3}
                            alt="filamento"
                            fluid
                            
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="imgFilamento"
                            src={foto4}
                            alt="filamento"
                            fluid
                            
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="imgFilamento"
                            src={foto5}
                            alt="filamento"
                            fluid
                            
                        />
                    </Carousel.Item>

                </Carousel>
            </div>


        </>
    )
}

export default CarruselDeFotos;