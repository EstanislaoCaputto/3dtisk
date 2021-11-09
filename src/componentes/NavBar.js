import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import './navbar.css'


function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className='barraNavegacion'>
            <Container>
                <Navbar.Brand href="/">3DTisk</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title='Tienda' id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Impresoras FDM</NavDropdown.Item>
                            <NavDropdown.Item href="/">Impresoras de Resina</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/servicioTecnico">Soporte Técnico</Nav.Link>
                        <Nav.Link href="/contactenos">Contáctenos</Nav.Link>
                        <Nav.Link href="#pricing">Mi Cuenta</Nav.Link>
                        <Nav.Link href="#pricing">Carrito</Nav.Link>
                        
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;