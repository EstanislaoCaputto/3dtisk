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
import Animado from './componentes/animado3d';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Cabecera />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/servicioTecnico" element={<Servicios />} />
          <Route exact path="/contactenos" element={<Contactar/>}/>
          <Route exact path="/tienda" element={<ItemList/>}/>
          <Route exact path="/animacion" element={<Animado/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
