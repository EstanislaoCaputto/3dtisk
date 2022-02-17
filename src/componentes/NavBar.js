import { useContext } from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import UserContex from '../context/userContext'
import './navbar.css'


function NavBar() {
    const {user} = useContext(UserContex)

    if (user) {
        return (
            <Navbar collapseOnSelect expand="lg" className='barraNavegacion'>
                <div className='miContainer'>
                    <Navbar.Brand href="/">Inicio</Navbar.Brand>
                    <Navbar.Brand href="/">
                        <a className='img-avatar'>
                            <p>1</p>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <NavDropdown title='Tienda' id="basic-nav-dropdown" menuVariant='dark'>
                                <NavDropdown.Item href="/tienda/1">Todos los productos</NavDropdown.Item>
                                <NavDropdown.Item href="/tienda/fdm">Impresoras FDM</NavDropdown.Item>
                                <NavDropdown.Item href="/tienda/resina">Impresoras de Resina</NavDropdown.Item>
                                <NavDropdown.Item href="/tienda/insumos">Componentes</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/servicioTecnico">Soporte Técnico</Nav.Link>
                            <Nav.Link href="/contactenos">Contáctenos</Nav.Link>
                            <Nav.Link href="/carrito" disabled={true} >Mi Carrito</Nav.Link>
                            <Nav.Link href="#pricing">Carrito</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
    return (
        <Navbar collapseOnSelect expand="lg" className='barraNavegacion'>
            <div className='miContainer'>
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <NavDropdown title='Tienda' id="basic-nav-dropdown" menuVariant='dark'>
                            <NavDropdown.Item href="/tienda/1">Todos los productos</NavDropdown.Item>
                            <NavDropdown.Item href="/tienda/fdm">Impresoras FDM</NavDropdown.Item>
                            <NavDropdown.Item href="/tienda/resina">Impresoras de Resina</NavDropdown.Item>
                            <NavDropdown.Item href="/tienda/insumos">Componentes</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/servicioTecnico">Soporte Técnico</Nav.Link>
                        <Nav.Link href="/contactenos">Contáctenos</Nav.Link>
                        <Nav.Link href="/crearCuenta">Mi Cuenta</Nav.Link>
                        <Nav.Link href="#pricing">Carrito</Nav.Link>
                        
                    </Nav>
                    
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavBar;