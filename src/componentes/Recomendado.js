import { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import buscarObjetos from '../db/manejadorDatos'
import './Recomendado.css'

export default function Recomendados(){
    const [recom, setRecom] = useState('')
    const [recom2, setRecom2] = useState('')
    const [recom3, setRecom3] = useState('')
    const [nombre, setNombre] = useState('')
    const [nombre1, setNombre1] = useState('')
    const [nombre2, setNombre2] = useState('')

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
            setNombre(primero.Nombre)
            setNombre1(segundo.Nombre)
            setNombre2(tercero.Nombre)

        })
    })
    let image = recom.split(',')
    let imag1 = recom2.split(',')
    let imag2 = recom3.split(',')
    let url = `https://3dtisk.com.ar/producto/${nombre}`
    let url1 = `https://3dtisk.com.ar/producto/${nombre1}`
    let url2 = `https://3dtisk.com.ar/producto/${nombre2}`
    return (
        <div className='ManejOfer'>

            <h3>Recomendados!!</h3>
            <div className='Recomend'>
                <div className='cadaCarru'>
                    <Carousel className='hola' fade>
                        <Carousel.Item className='hola'>
                            <img src={image[0]} alt='hola' className='imgRecomen'></img>
                        </Carousel.Item>
                        <Carousel.Item className='hola'>
                            <img src={image[1]} alt='hola' className='imgRecomen'></img>
                        </Carousel.Item>
                        <Carousel.Item className='hola'>
                            <img src={image[2]} alt='hola' className='imgRecomen'></img>
                        </Carousel.Item>
                        <Carousel.Item className='hola'>
                            <img src={image[3]} alt='hola' className='imgRecomen'></img>
                        </Carousel.Item>
                        <Carousel.Item className='hola'>
                            <img src={image[4]} alt='hola' className='imgRecomen'></img>
                        </Carousel.Item>
                    </Carousel>
                    <div className='desc-carru'>
                        <h3>Trimaker Nebula</h3>
                        <p>Equipo desarrollado 100% en Argentina. Excelente desde el diseño hasta su calidad de impresión. Muy precisa y confiable, cuenta extrusión directa, mesa de 230mm x 230mm x 260mm y muy silenciosa a la hora de imprimir. </p>
                        <a href={url}><button className='btn btn-primary'>Mas Info</button></a>
                    </div>
                </div>
                <div className='cadaCarru'>
                <Carousel className='hola' fade>
                    <Carousel.Item className='hola'>
                        <img src={imag1[0]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item className='hola'>
                        <img src={imag1[1]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item className='hola'>
                        <img src={imag1[2]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item className='hola'>
                        <img src={imag1[3]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                    <Carousel.Item className='hola'>
                        <img src={imag1[4]} alt='hola' className='imgRecomen img-fluid'></img>
                    </Carousel.Item>
                </Carousel>
                    <div className='desc-carru'>
                        <h3>Creality Genius</h3>
                        <p>Premiada en el top de impresoras. Muy silenciosa, con una calidad de impresión de primera con capacidad de aumentar la velocidad sin degradar su precisión. Mesa de 230mm x 230mm x 250mm y cuenta con drivers silenciosos. </p>
                        <a href={url1}><button className='btn btn-primary'>Mas Info</button></a>
                    </div>
                </div>
                <div className='cadaCarru'>
                    <Carousel className='hola' fade>
                        <Carousel.Item className='hola'>
                            <img src={imag2[0]} alt='hola' className='imgRecomen img-fluid'></img>
                        </Carousel.Item>
                        <Carousel.Item className='hola'>
                            <img src={imag2[1]} alt='hola' className='imgRecomen img-fluid'></img>
                        </Carousel.Item>
                        <Carousel.Item className='hola'>
                            <img src={imag2[2]} alt='hola' className='imgRecomen img-fluid'></img>
                        </Carousel.Item>
                        <Carousel.Item className='hola'>
                            <img src={imag2[3]} alt='hola' className='imgRecomen img-fluid'></img>
                        </Carousel.Item>
                        <Carousel.Item className='hola'>
                            <img src={imag2[4]} alt='hola' className='imgRecomen img-fluid'></img>
                        </Carousel.Item>
                    </Carousel>
                <div className='desc-carru'>
                        <h3>Magna 2</h3>
                        <p>Para los Makers que quieren llevar a otro nivel sus productos. Cuenta con todas las comodidades, cama de 230mm x 230mm x 260mm, doble extrusor para piezas en dos tonos, mesa muy solida, cama magnética, conexión wifi para imprimir.</p>
                        <a href={url2}><button className='btn btn-primary'>Mas Info</button></a>
                    </div>
                </div>
            </div>
        </div>
    )

}