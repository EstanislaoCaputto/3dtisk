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
  console.log(Productos);
  
  return (
    <div className='carruEstandar'>
      <h2> {ArrayProductos.titulo} </h2>
      <Slider {...config} className='card-group'>
          <div className="card">
          <div className='card-header'>
            <button className="btn"><i className="bi bi-cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg></i></button>
            <button className="btn"><i className="bi bi-heart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg></i></button>
          </div>
          <a href={Productos[0].permalink} className='card-body'>
            <img src={Productos[0].images[0].src} className='card-img img-fluid' alt='foto1' />
            <p className="nombre">{Productos[0].name.split('Impresora 3D')}</p>
            <h3 className="precio">${Productos[0].price}</h3>
          </a>            
            <div className='card-footer'>
              <p className={Productos[0].stock_status}>{Productos[0].stock_status}</p>
            </div>
          </div>
          <div className="card">
          <div className='card-header'>
            <button className="btn"><i className="bi bi-cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg></i></button>
            <button className="btn"><i className="bi bi-heart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg></i></button>
          </div>
          <a href={Productos[1].permalink} className='card-body'>
            <img src={Productos[1].images[0].src} className='card-img img-fluid' alt='foto1' />
            <p className="nombre">{Productos[1].name.split('Impresora 3D')}</p>
            <h3 className="precio">${Productos[1].price}</h3>
            </a>
            <div className='card-footer'>
              <p className={Productos[1].stock_status}>{Productos[1].stock_status}</p>
            </div>
          </div>
          <div className="card">
          <div className='card-header'>
            <button className="btn"><i className="bi bi-cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg></i></button>
            <button className="btn"><i className="bi bi-heart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg></i></button>
          </div>
          <a href={Productos[2].permalink} className='card-body'>
            <img src={Productos[2].images[0].src} className='card-img img-fluid' alt='foto1' />
            <p className="nombre">{Productos[2].name.split('Impresora 3D')}</p>
            <h3 className="precio">${Productos[2].price}</h3>
            </a>
            <div className='card-footer'>
              <p className={Productos[2].stock_status}>{Productos[2].stock_status}</p>
            </div>
          </div>
          <div className="card">
          <div className='card-header'>
            <button className="btn"><i className="bi bi-cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg></i></button>
            <button className="btn"><i className="bi bi-heart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg></i></button>
          </div>
          <a href={Productos[3].permalink} className='card-body'>
            <img src={Productos[3].images[0].src} className='card-img img-fluid' alt='foto1' />
            <p className="nombre">{Productos[3].name.split('Impresora 3D')}</p>
            <h3 className="precio">${Productos[3].price}</h3>
            </a>
            <div className='card-footer'>
              <p className={Productos[3].stock_status}>{Productos[3].stock_status}</p>
            </div>
          </div>
          <div className="card">
          <div className='card-header'>
            <button className="btn"><i className="bi bi-cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg></i></button>
            <button className="btn"><i className="bi bi-heart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg></i></button>
          </div>
          <a href={Productos[4].permalink} className='card-body'>
            <img src={Productos[4].images[0].src} className='card-img img-fluid' alt='foto1' />
            <p className="nombre">{Productos[4].name.split('Impresora 3D')}</p>
            <h3 className="precio">${Productos[4].price}</h3>
            </a>
            <div className='card-footer'>
              <p className={Productos[4].stock_status}>{Productos[4].stock_status}</p>
            </div>
          </div>
          <div className="card">
          <div className='card-header'>
            <button className="btn"><i className="bi bi-cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg></i></button>
            <button className="btn"><i className="bi bi-heart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg></i></button>
          </div>
          <a href={Productos[5].permalink} className='card-body'>
            <img src={Productos[5].images[0].src} className='card-img img-fluid' alt='foto1' />
            <p className="nombre">{Productos[5].name.split('Impresora 3D')}</p>
            <h3 className="precio">${Productos[5].price}</h3>
            </a>
            <div className='card-footer'>
              <p className={Productos[5].stock_status}>{Productos[5].stock_status}</p>
            </div>
          </div>
      </Slider>
    </div>
  )


}

// export default class Responsive extends Component {
//     constructor(){
//         super()
//     }
//     render() {
//       var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         initialSlide: 0,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
//       };
//       return (
//         <div>
//           <h2> Responsive </h2>
//           <Slider {...settings}>
//             <div>
//               <h3>1</h3>
//             </div>
//             <div>
//               <h3>2</h3>
//             </div>
//             <div>
//               <h3>3</h3>
//             </div>
//             <div>
//               <h3>4</h3>
//             </div>
//             <div>
//               <h3>5</h3>
//             </div>
//             <div>
//               <h3>6</h3>
//             </div>
//             <div>
//               <h3>7</h3>
//             </div>
//             <div>
//               <h3>8</h3>
//             </div>
//           </Slider>
//         </div>
//       );
//     }
//   }