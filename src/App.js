import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabecera from './componentes/Cabecera';
import NavBar from './componentes/NavBar'
import Servicios from './componentes/Servicios';
import Home from './componentes/Home';
import Contactar from './componentes/Contactenos';

import 'bootstrap/dist/css/bootstrap.min.css'




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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
