import React from 'react';

const sudaderaVerdeDescripcion = "¡Destaca con estilo en nuestra sudadera verde! Confeccionada con suave tela y un vibrante tono verde, esta prenda es la combinación perfecta de comodidad y moda. Ideal para destacar en cualquier ocasión, mantente a la moda mientras te mantienes abrigado. ¡No te pierdas esta pieza imprescindible para tu armario.";
const boxerCafeDescripcion = "Experimenta la comodidad y el estilo con nuestro boxer cafe. Confeccionado con suave tela que se adapta a tu cuerpo, este boxer ofrece un ajuste perfecto y un toque de elegancia. Ideal para cualquier ocasión, su diseño clásico en negro agrega un toque de sofisticación a tu colección de ropa interior.";
const gorraRosaDescripcion = "Completa tu estilo con nuestra gorra rosa, un accesorio versátil y atemporal. Fabricada con materiales de alta calidad, esta gorra no solo te brinda comodidad, sino que también agrega un toque de elegancia a tu atuendo.";
const pantalonAzulMarinoDescripcion = "¡Eleva tu estilo con nuestros pantalones azules marinos! Con un diseño versátil y atemporal, estos pantalones ofrecen comodidad y elegancia en cada paso. Perfectos para cualquier ocasión, la calidad de los materiales garantiza durabilidad y un ajuste impecable.";
const camisetaNegraDescripcion = "Eleva tu estilo con nuestra camiseta negra, una pieza esencial en cualquier guardarropa. La suave tela proporciona comodidad durante todo el día, mientras que el diseño versátil te permite crear looks desde casuales hasta elegantes.";
const zapatosAzulesDescripcion = "Destaca con estilo en nuestros zapatos azules. Con un vibrante color que ilumina cualquier look, estos zapatos no solo son llamativos sino también cómodos. La calidad de la construcción garantiza durabilidad, mientras que el diseño moderno agrega un toque de moda a tu calzado.";


function ofertas() {
  return (
    <div>
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
    <div class="container mt-5">
      <h2 class="text-center mb-4">Ofertas Especiales</h2>

      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="assets/imagenes/ropa1.png" class="card-img-top" alt="Oferta 1" />
            <div class="card-body">
              <h5 class="card-title">Sudadera Verde</h5>
              <p class="card-text">{sudaderaVerdeDescripcion}</p>
              <a href="#" class="btn btn-primary">Ver Detalles</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
      <div class="card">
        <img src="assets/imagenes/boxer2.png" class="card-img-top" alt="Oferta 2" />
        <div class="card-body">
          <h5 class="card-title">Boxer Café</h5>
          <p class="card-text">{boxerCafeDescripcion}</p>
          <a href="#" class="btn btn-primary">Ver Detalles</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="assets/imagenes/gorra3.png" class="card-img-top" alt="Oferta 3" />
        <div class="card-body">
          <h5 class="card-title">Gorra Rosa</h5>
          <p class="card-text">{gorraRosaDescripcion}</p>
          <a href="#" class="btn btn-primary">Ver Detalles</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="assets/imagenes/pantalon4.png" class="card-img-top" alt="Oferta 4" />
        <div class="card-body">
          <h5 class="card-title">Pantalón Azul Marino</h5>
          <p class="card-text">{pantalonAzulMarinoDescripcion}</p>
          <a href="#" class="btn btn-primary">Ver Detalles</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="assets/imagenes/camiseta5.png" class="card-img-top" alt="Oferta 5" />
        <div class="card-body">
          <h5 class="card-title">Camiseta Negra</h5>
          <p class="card-text">{camisetaNegraDescripcion}</p>
          <a href="#" class="btn btn-primary">Ver Detalles</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="assets/imagenes/zapatos6.png" class="card-img-top" alt="Oferta 6" />
        <div class="card-body">
          <h5 class="card-title">Zapatos Azules</h5>
          <p class="card-text">{zapatosAzulesDescripcion}</p>
          <a href="#" class="btn btn-primary">Ver Detalles</a>
        </div>
      </div>
    </div>
    <footer>
      <p>&copy; 2024 Ropilocura - Venta de Ropa</p>
    </footer>
    </div>
    </div>
  );
};

export default ofertas;
