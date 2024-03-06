import React from 'react';

function index() {
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
        <div className="row">
          <div className="col-md-6">
            <div className="highlight-box">
              <h2>Nueva Ropa</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="search-bar">
              <input type="text" placeholder="Buscar..." />
              <button>Buscar</button>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div id="ropaCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="assets/imagenes/nuevo1.png" className="d-block w-100" alt="RopaN 1" />
                  </div>
                  <div className="carousel-item">
                    <img src="assets/imagenes/nuevo2.png" className="d-block w-100" alt="RopaN 2" />
                  </div>
                  <div className="carousel-item">
                    <img src="assets/imagenes/nuevo3.png" className="d-block w-100" alt="RopaN 3" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#ropaCarousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#ropaCarousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Siguiente</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <section class="offer-section">
        <h2>Ofertas de Ropa</h2>
        <div class="row"/>
                <div class="col-md-4">
                    <div class="offer-box">
                        <img src="assets/imagenes/ropa1.png" alt="Oferta 1"/>
                        <h3>Sudadera Verde</h3>
                        <p>¡Destaca con estilo en nuestra sudadera verde! Confeccionada con suave tela y un vibrante tono verde, esta prenda es la combinación perfecta de comodidad y moda.</p>
                        <button>Ver más</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="offer-box">
                        <img src="assets/imagenes/boxer2.png" alt="Oferta 2"/>
                        <h3>Boxer Cafe</h3>
                        <p>xperimenta la comodidad y el estilo con nuestro boxer cafe. Confeccionado con suave tela que se adapta a tu cuerpo, este boxer ofrece un ajuste perfecto y un toque de elegancia. Ideal para cualquier ocasión, su diseño clásico en negro agrega un toque de sofisticación a tu colección de ropa interior.</p>
                        <button>Ver más</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="offer-box">
                        <img src="assets/imagenes/gorra3.png" alt="Oferta 3"/>
                        <h3>Gorra Rosa</h3>
                        <p>Completa tu estilo con nuestra gorra rosa, un accesorio versátil y atemporal. Fabricada con materiales de alta calidad, esta gorra no solo te brinda comodidad, sino que también agrega un toque de elegancia a tu atuendo.</p>
                        <button>Ver más</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="offer-box">
                        <img src="assets/imagenes/pantalon4.png" alt="Oferta 4"/>
                        <h3>Pantalon Azul marino</h3>
                        <p>¡Eleva tu estilo con nuestros pantalones azules marinos! Con un diseño versátil y atemporal, estos pantalones ofrecen comodidad y elegancia en cada paso. Perfectos para cualquier ocasión, la calidad de los materiales garantiza durabilidad y un ajuste impecable.</p>
                        <button>Ver más</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="offer-box">
                        <img src="assets/imagenes/camiseta5.png" alt="Oferta 5"/>
                        <h3>Camiseta Negra</h3>
                        <p>Eleva tu estilo con nuestra camiseta negra, una pieza esencial en cualquier guardarropa. La suave tela proporciona comodidad durante todo el día, mientras que el diseño versátil te permite crear looks desde casuales hasta elegantes.</p>
                        <button>Ver más</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="offer-box">
                        <img src="assets/imagenes/zapatos6.png" alt="Oferta 6"/>
                        <h3>Zapatos Azules</h3>
                        <p>Destaca con estilo en nuestros zapatos azules. Con un vibrante color que ilumina cualquier look, estos zapatos no solo son llamativos sino también cómodos. La calidad de la construcción garantiza durabilidad, mientras que el diseño moderno agrega un toque de moda a tu calzado.</p>
                        <button>Ver más</button>
                    </div>
                </div>
      </section>
      
    <section class="Testimonios-section">
        <h2>Testimonios de Clientes</h2>
        <div class="testimonio-container">
            <div class="testimonio">
                <p>"¡Increíble servicio! La calidad de la ropa supera mis expectativas. Definitivamente volveré a comprar aquí."</p>
                <p class="cliente-info">- Lady M., Cliente Satisfecha</p>
            </div>
            <div class="testimonio">
                <p>"Ropilocura tiene la mejor selección de moda. Siempre encuentro lo que estoy buscando a precios excelentes."</p>
                <p class="cliente-info">- Andres S., Cliente Frecuente</p>
            </div>
        </div>
    </section>

      <section className="formulario-section">
    <h2>Suscríbete para recibir actualizaciones</h2>
    <p>Recibe noticias sobre nuevas llegadas, ofertas especiales y más.</p>
    <form id="formulario-form" action="#" method="post">
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" name="nombre" placeholder="Tu nombre" required/>

      <label htmlFor="email">Correo Electrónico:</label>
      <input type="email" name="email" placeholder="Tu correo electrónico" required/>

      <label htmlFor="telefono">Teléfono:</label>
      <input type="tel" name="telefono" placeholder="Tu número de teléfono" required/>

      <label htmlFor="empresa">Nombre de la Empresa:</label>
      <input type="text" name="empresa" placeholder="Nombre de tu tienda" required/>

      <label htmlFor="ciudad">Ciudad:</label>
      <input type="text" name="ciudad" placeholder="Ciudad donde se encuentra tu tienda" required/>

      <button type="submit">Suscribirse</button>
    </form>
  </section>
  <section className="pagos-options-section">
    <h2>Opciones de Pago</h2>
    <div className="pagos-options-container">
      <div className="pagos-option">
        <img src="assets/imagenes/Visa.png" alt="Tarjeta Visa" />
        <p>Tarjeta de Crédito (Visa)</p>
      </div>
      <div className="pagos-option">
        <img src="assets/imagenes/mastercard.png" alt="Tarjeta Mastercard" />
        <p>Tarjeta de Crédito (Mastercard)</p>
      </div>
      <div className="pagos-option">
        <img src="assets/imagenes/paypal.png" alt="PayPal" />
        <p>PayPal</p>
      </div>
    </div>
  </section>

      </main>
      <footer>
        <p>&copy; 2024 Ropilocura - Venta de Ropa</p>
      </footer>
    </div>
  );
}

export default index;

