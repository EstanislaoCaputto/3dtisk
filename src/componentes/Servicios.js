import { Button, Card, CardGroup } from 'react-bootstrap';
import logo from './img/Logo.svg';
import insumFila from './img/Sin-título-1_1.svg';
import servTec from './img/png-transparent-technical-support-customer-service-computer-icons-help-desk-talking-on-phone-microph.svg'
import servImpre from './img/Sin-título-3.svg'
import './servicios.css';

function Servicios() {
    return (
        <div className="servicios">
            <h2>Servicios</h2>
            <div className='separador'></div>
            <CardGroup xs={1} md={2} lg={4} className='g-4'>


                <Card className="bg-secondary text-black">
                    <Card.Img src={logo} alt="Card image" />

                    <Card.Title>Venta de Impresoras 3D</Card.Title>
                    <Card.Text>
                        Asesoramiento personalizado para garantizarte un equipo que cumpla con todas tus expectativas.
                    </Card.Text>

                </Card>


                <Card className=" bg-secondary text-black">
                    <Card.Img src={insumFila} alt="Card image" />

                    <Card.Title>Insumos y Filamentos</Card.Title>
                    <Card.Text>
                        Hace tu pedido de filamentos, mejoras para tu equipo o encarga los repuestos que necesites.
                    </Card.Text>

                </Card>


                <Card className="bg-secondary text-black">
                    <Card.Img src={servTec} alt="Card image" />

                    <Card.Title>Servicio Técnico</Card.Title>
                    <Card.Text>
                        Si necesitas un mantenimiento de tu maquina, no dudes en contactarnos o ver algunos videos tutoriales.
                    </Card.Text>

                </Card>


                <Card className="bg-secondary text-black">
                    <Card.Img src={servImpre} alt="Card image" />

                    <Card.Title>Servicio de Impresión</Card.Title>
                    <Card.Text>
                        Pedí tus piezas para imprimir en 3D o también hace encargos de diseños exclusivos.
                    </Card.Text>

                </Card>

            </CardGroup>
            <div className='servicios-videos'>
                <div className='videos'>
                    <h3>Nivelacion de cama con Level Corners</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/G-hI0CtsJfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='videos'>
                    <h3>Cambio de teflón</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mWLbOOqrFpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='videos'>
                    <h3>Destapar pico extrusor</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/u2Y2f-0NI0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='videos'>
                    <h3>Calibración de drivers de steppers</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6yRG4gYxFvM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <h4>Si necesitas un servicio personalizado, comunicate con nosotros.</h4>
            <a href='/contactenos'>
            <Button className='Botton'variant='warning'>Contactanos</Button>
            </a>
        </div>
    )
}
export default Servicios;