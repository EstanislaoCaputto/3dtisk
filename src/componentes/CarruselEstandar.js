import { useState, useEffect } from "react";
import Slider from 'react-slick'
import './CarruEstandar.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function CarruEstandar({Producto1,Producto2,Producto3,Producto4,Producto5,Producto6,Producto7,titulo}){
    const [config,setConfig]=useState({})
    useEffect(()=>{
        setConfig({
            dots: true,
            infinite: true,
            speed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay:true,
            autoplaySpeed:5000,
            cssEase:"linear",

            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: '600px',
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
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
        })
    },[])
    
    return(
        <div className='carruEstandar'>
            <h2> {titulo} </h2>
            <Slider {...config} className='slider'>
                <div className="card">
                    <img src={Producto1[0].images[0].src} className='card-img img-fluid' alt='foto1' />
                    <p>{Producto1[0].name}</p>
                    <h3 className="precio">${Producto1[0].price}</h3>
                </div>
                <div className="card">
                    <img src={Producto2[0].images[0].src} className='card-img img-fluid' alt='foto1' />
                    <p>{Producto2[0].name}</p>
                    <h3 className="precio">${Producto2[0].price}</h3>
                </div>
                <div className="card">
                    <img src={Producto3[0].images[0].src} className='card-img img-fluid' alt='foto1' />
                    <p>{Producto3[0].name}</p>
                    <h3 className="precio">${Producto3[0].price}</h3>
                </div>
                <div className="card">
                    <img src={Producto4[0].images[0].src} className='card-img img-fluid' alt='foto1' />
                    <p>{Producto4[0].name}</p>
                    <h3 className="precio">${Producto4[0].price}</h3>
                </div>
                <div className="card">
                    <img src={Producto5[0].images[0].src} className='card-img img-fluid' alt='foto1' />
                    <p>{Producto5[0].name}</p>
                    <h3 className="precio">${Producto5[0].price}</h3>
                </div>
                <div className="card">
                    <img src={Producto6[1].images[0].src} className='card-img img-fluid' alt='foto1' />
                    <p>{Producto6[1].name}</p>
                    <h3 className="precio">${Producto6[1].price}</h3>
                </div>
                <div className="card">
                    <img src={Producto7[0].images[0].src} className='card-img img-fluid' alt='foto1' />
                    <p>{Producto7[0].name}</p>
                    <h3 className="precio">${Producto7[0].price}</h3>
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