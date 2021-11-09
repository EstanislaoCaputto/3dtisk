import { Card } from 'react-bootstrap';

import './servicios.css';

function Servicios() {
    return(
        <div className="servicios">
            <h2>Servicios</h2>
            <div className='separador'></div>
            <div className='servicios-card'>
            <div className='ventas'>
                <Card className="bg-dark text-white">
                    <Card.Img src="" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Venta de Impresoras 3D</Card.Title>
                        <Card.Text>
                            Asesoramiento personalizado para garantizarte un equipo que cumpla con todas tus expectativas.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className='ventas'>
                <Card className="bg-dark text-white">
                    <Card.Img src="" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Venta de Impresoras 3D</Card.Title>
                        <Card.Text>
                            Asesoramiento personalizado para garantizarte un equipo que cumpla con todas tus expectativas.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className='ventas'>
                <Card className="bg-dark text-white">
                    <Card.Img src="" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Venta de Impresoras 3D</Card.Title>
                        <Card.Text>
                            Asesoramiento personalizado para garantizarte un equipo que cumpla con todas tus expectativas.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className='ventas'>
                <Card className="bg-dark text-white">
                    <Card.Img src="" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Venta de Impresoras 3D</Card.Title>
                        <Card.Text>
                            Asesoramiento personalizado para garantizarte un equipo que cumpla con todas tus expectativas.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            </div>
        </div>
    )
}
export default Servicios;