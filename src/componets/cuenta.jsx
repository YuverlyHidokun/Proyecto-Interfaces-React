import React from 'react';
import logo from './assets/imagenes/logo.png';
import perfil from './assets/imagenes/perfil.png';

const cuenta = () => {
  return (
    <div>
      <header>
        <div className="row">
          <div className="col">
          <img src={logo} alt="logocompañia" />
          </div>
          <div className="col">
            BIENVENIDOS A ROPILOOCURA
          </div>
        </div>
      </header>
      <main>
        <div className="options-container">
          <nav>
            <ul>
              <li><a href="index.html">Inicio</a></li>
              <li><a href="info.html">Info</a></li>
              <li><a href="tienda.html">Tienda</a></li>
              <li><a href="ofertas.html">Ofertas</a></li>
              <li><a href="carrito.html">Carrito</a></li>
              <li><a href="mi_cuenta.html">Mi cuenta</a></li>
            </ul>
          </nav>
        </div>
        <div className="profile-picture">
          <img src={perfil} alt="Foto de perfil" />
          <h1>Yuverly Verdezoto</h1>
        </div>

        <div id="contenido">
          <section className="tarjetas">
            <h2>Información del Usuario</h2>
            <p><strong>Nombre:</strong> Yuverly</p>
            <p><strong>Email:</strong> Yuverly@gmail.com</p>
            <p><strong>Dirección:</strong> S46D Guamani, Quito</p>
            <p><strong>Telefono:</strong> 02 269 3023</p>
            <p><strong>Cargo:</strong> Gerente, Despachador</p>
          </section>
          <section className="tarjetas">
            <h2>Carrito de Compras actual</h2>
            <ul>
              <li>Sudadera Verde - $19.99</li>
              <li>Zapatos Azules - $19.99</li>
              <li>Camiseta Verde - $9.99</li>
            </ul>
            <button className="cuenta-button"><a href="carrito.html">Ir al Carrito</a></button>
          </section>
        </div>
        <div id="contenido">
          <section className="tarjetas">
            <h2>Información del Local</h2>
            <p><strong>Nombre del local:</strong> John Doe</p>
            <p><strong>Email de contacto:</strong> john.doe@example.com</p>
            <p><strong>Dirección del local:</strong> ladron de Guevara, Quito</p>
            <p><strong>Telefono del local:</strong> 099 123 1223</p>
          </section>
          <section className="tarjetas">
            <h2>Historial de Compras</h2>
            <ul>
              <li>Pedido #1 - $150.00</li>
              <li>Pedido #2 - $330.00</li>
              <li>Pedido #3 - $440.00</li>
            </ul>
            <button className="cuenta-button" href='carrito.html'>Ver Historial</button>
          </section>
        </div>
        <div className="acciones-cuenta">
          <button className="cuenta-button">Editar Perfil</button>
          <button className="cuenta-button">Agregar otra cuenta</button>
          <button className="cuenta-button-cerrar">Cerrar Sesión</button>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Ropilocura - Venta de Ropa</p>
      </footer>
    </div>
  );
};

export default cuenta;
