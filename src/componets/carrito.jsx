import React, { useState } from 'react';

const Sugerencias = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Sugerencias</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <img src="assets/imagenes/pantalon4.png" className="card-img-top" alt="Producto 1" />
            <div className="card-body">
              <h5 className="card-title">Pantalon Azul</h5>
              <p className="card-text">$20.00</p>
              <button className="btn btn-primary" onClick={() => agregarAlCarrito("Pantalon Azul")}>
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <img src="assets/imagenes/boxer6.png" className="card-img-top" alt="Producto 2" />
            <div className="card-body">
              <h5 className="card-title">Boxer Piel</h5>
              <p className="card-text">$25.00</p>
              <button className="btn btn-primary" onClick={() => agregarAlCarrito("Boxer Piel")}>
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Carrito = () => {
    const [productosEnCarrito, setProductosEnCarrito] = useState([
      { nombre: "Sudadera Roja", precio: 19.99 },
      { nombre: "Gorra Amarilla", precio: 9.99 },
      { nombre: "Zapatos Negros", precio: 9.99 },
      { nombre: "Camiseta Morada", precio: 9.99 },
      { nombre: "Boxer Blanco", precio: 4.99 },
      { nombre: "Pantalon Celeste", precio: 14.99 },
    ]);
  
    const borrarDelCarrito = (index) => {
      const nuevosProductos = [...productosEnCarrito];
      nuevosProductos.splice(index, 1);
      setProductosEnCarrito(nuevosProductos);
    };
  
    return (
      <div className="cart container mt-4">
        <h2 className="mb-3">Carrito</h2>
        <ul>
          {productosEnCarrito.map((producto, index) => (
            <li className="mb-2" key={index}>
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">{producto.nombre}</h6>
                  <p className="card-text">${producto.precio.toFixed(2)}</p>
                  <button className="btn btn-danger" onClick={() => borrarDelCarrito(index)}>
                    Borrar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

function carrito() {
  return (
    <>
      <header>
        <div className="row">
          <div className="col">
            <img src="assets/imagenes/logo.png" alt="logocompañia" />
          </div>
          <div className="col">
            BIENVENIDOS A ROPILOOCURA
          </div>
        </div>
      </header>
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
    </>
  );
}

export default carrito;