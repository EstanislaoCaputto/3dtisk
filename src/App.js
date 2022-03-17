import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabecera from './componentes/Cabecera';
import NavBar from './componentes/NavBar'
import Servicios from './componentes/Servicios';
import Home from './componentes/Home';
import Contactar from './componentes/Contactenos';
import Footer from './componentes/Footer';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemList from './componentes/itemList'
import {Animado} from './componentes/animado3d';
import CrearCuenta from './componentes/CrearCuenta';
import ItemDetalleContenedor from './componentes/ItemDetalleContenedor';
import Fdm from './componentes/Fdm';
import Resina from './componentes/Resina';
import UsuarioInterfaz from './componentes/UsuarioInterfaz';
import {UserProvider} from './context/userContext'




function App() {
  return (
    <BrowserRouter>
      <UserProvider>

        <div className="App">
          <Cabecera />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/usuario" element={<UsuarioInterfaz />} />
            <Route exact path="/servicioTecnico" element={<Servicios />} />
            <Route exact path="/contactenos" element={<Contactar />} />
            <Route exact path="/tienda/:Pagina" element={<ItemList />} />
            <Route exact path="/tienda/fdm" element={<Fdm />} />
            <Route exact path="/tienda/resina" element={<Resina />} />

            <Route exact path="/animacion" element={<Animado />} />
            <Route exact path="/crearCuenta" element={<CrearCuenta />} />
            <Route exact path="/producto/:Referencia" element={<ItemDetalleContenedor />} />
          </Routes>
          <Footer />
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

