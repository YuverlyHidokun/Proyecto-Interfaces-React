import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import index from './componets/index';
import './assets/css/styles.css';
import ofertas from './componets/ofertas';
import './assets/css/ofertas.css';
import carrito from './componets/carrito';
import './assets/css/carrito.css';
import info from './componets/info';
import './assets/css/info.css'
import tienda from './componets/tienda';
import './assets/css/tienda.css';
import LoginForm from './componets/login';
import './assets/css/login.css';
import cuenta from './componets/cuenta';
import './assets/css/usuario.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<index />} />
          <Route path="/ofertas" element={<ofertas />} />
          <Route path="/carrito" element={<carrito />} />
          <Route path="/info" element={<info />} />
          <Route path="/tienda" element={<tienda />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/cuenta" element={<cuenta />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
