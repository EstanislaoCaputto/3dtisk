import { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import buscarObjetos from '../db/manejadorDatos'
import './Recomendado.css'

export default function Recomendados(){
    const [recom, setRecom] = useState('')
    const [recom2, setRecom2] = useState('')
    const [recom3, setRecom3] = useState('')

    useEffect(()=>{
        buscarObjetos().then(r=>{
            let todo = r.obj.payload
            let primero, segundo, tercero
            primero = todo[41]
            segundo = todo[42]
            tercero = todo[30]
            setRecom(primero.Imágenes)
            setRecom2(segundo.Imágenes)
            setRecom3(tercero.Imágenes)

        })
    })
    let image = recom.split(',')
    let imag1 = recom2.split(',')
    let imag2 = recom3.split(',')
    return (
        <div className='ManejOfer'>

            <h3>Recomendados!!</h3>
            <div className='Recomend'>
                <div className='cadaCarru'>
                <Carousel fade>
                    <Carousel.Item>
                        <img src={image[0]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image[1]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image[2]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image[3]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image[4]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                </Carousel>
                </div>
                <div className='cadaCarru'>
                <Carousel fade>
                    <Carousel.Item>
                        <img src={imag1[0]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imag1[1]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imag1[2]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imag1[3]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imag1[4]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                </Carousel>
                </div>
                <div className='cadaCarru'>
                <Carousel fade>
                    <Carousel.Item>
                        <img src={imag2[0]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imag2[1]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imag2[2]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imag2[3]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imag2[4]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </div>
    )

}