import { useEffect } from "react"
import { Col, Image, Nav, Row, Tab } from "react-bootstrap"
import { Link } from "react-router-dom"
import './itemDetalle.css'

function ItemDetalle({producto}){
    let precio = (parseInt(producto.prices.regular_price)/100).toLocaleString('en-US')
    let foto = producto.images[0].src
    let marca = producto.categories[0].name
    let especifTecn = producto.description.split('ESPECIFICACIONES TÉCNICAS')[1]
    let imagenes = []
    imagenes.push(producto.images[0].src,producto.images[0].thumbnail, producto.images[1].src, producto.images[2].src)
    console.log(imagenes)
    useEffect(()=>{
        let div = document.getElementById('Descri')
        let descripcion = producto.description.split('ESPECIFICACIONES TÉCNICAS')[0]
        div.innerHTML = descripcion

    },[producto])


    return(
        <div className="ConteDetalle">
            <div className="NombreDetalle">
                <h1>{producto.name}</h1>
            </div>
            <div className="Detalles">
                <div className="FotoDetalle">
                    <Image src={foto} fluid />
                </div>
                <div className="Info">
                    <Tab.Container id="left-tabs-example" defaultActiveKey='first'>
                        <Row>
                            <Col sm='3'>
                                <Nav variant='pills' className='flex-column'>
                                    <Nav.Item className="btn btn-primary">
                                        <Nav.Link eventKey='first'>Informacion</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="btn btn-primary">
                                        <Nav.Link eventKey='second'>Descripcion</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='btn btn-primary'>
                                        <Link to='/tienda'>Volver</Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col lg='9'>
                                <Tab.Content>
                                    <Tab.Pane eventKey='first'>
                                        <h3>Marca: {marca}</h3>
                                        <h3>Precio: ${precio}</h3>
                                        <div className="contenedor-galeria">
                                            {imagenes.map((src,index)=>{
                                                return(
                                                    <div key={index} className='contiene-foto'><img className='cadaImgGaleria img-fluid' src={src} alt={producto.name}></img></div>
                                                )
                                            }) }
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='second'>
                                        <div id="Descri">
                                            
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </div>
    )
}

export default ItemDetalle