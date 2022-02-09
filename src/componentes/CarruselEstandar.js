import { useState, useEffect } from "react";
import Slider from 'react-slick'
import { Spinner } from "react-bootstrap";
import './CarruEstandar.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function CarruEstandar(ArrayProductos, titulo){
    const [config,setConfig]=useState({})
    const [Productos, setProductos] = useState([])

    useEffect(()=>{
      let settings = {
        dots: true,
        infinite: true,
        speed: 15000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
        autoplaySpeed:3000,
        cssEase:"linear",
        pauseOnHover:true,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  speed:8000,
                  slidesToShow: 4,
                  slidesToScroll: 4,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
        }
        setConfig(settings)
        
      setProductos(ArrayProductos.ArrayProductos)
      
    },[ArrayProductos.ArrayProductos])

    
  if (Productos.length === 0) {
    return (
      <div className='Cargador'>
        <Spinner animation='border' variant='info' size='lg' />
      </div>
    )
  }
  
  return (
    <div className='carruEstandar'>
      <h2> {ArrayProductos.titulo} </h2>
      <Slider {...config} className='card-group'>

        {Productos.map((elem,index)=>{
          return (
            <div key={index} className="card">
              <div className='card-header'>
                <button className="btn"><i className="bi bi-cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg></i></button>
                <button className="btn"><i className="bi bi-heart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg></i></button>
              </div>
              <a href={elem[0].permalink}>
                <div className='card-body'>
                  <img src={elem[0].images[0].src} className='card-img img-fluid' alt='foto1' />
                  <p className="nombre">{elem[0].name.split('Impresora 3D')}</p>
                  <h3 className="precio">${(elem[0].prices.price / 100).toLocaleString('en')}</h3>
                </div>
                <div className='card-footer'>
                  <p className={elem[0].is_in_stock.toString()}>{elem[0].is_in_stock.toString()}</p>
                </div>
                </a>
            </div>
          )
        })}
          
      </Slider>
    </div>
  )


}
