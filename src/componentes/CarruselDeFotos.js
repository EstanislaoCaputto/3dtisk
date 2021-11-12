import {Carousel, Image} from 'react-bootstrap'
import './carruselDeFotos.css'
import filamento3D from './img/Ecofila-Naranja-1080x450-1-1024x427.jpg'

function CarruselDeFotos() {
    return (
        <div className='elCarruFoto'>
            <Carousel>
                <Carousel.Item>
                    <Image
                        className="imgFilamento"
                        src={filamento3D}
                        alt="filamento"
                        fluid
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="imgFilamento"
                        src={filamento3D}
                        alt="Second slide"
                        fluid
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="imgFilamento"
                        src={filamento3D}
                        alt="Third slide"
                        fluid
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarruselDeFotos;