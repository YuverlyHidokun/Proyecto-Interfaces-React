import React from 'react';

const Navigation = () => {
  return (
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
  );
};

const MisionSection = () => {
  return (
    <section id="mision">
      <div className="container">
        <h2>Misión</h2>
        <div className="row">
          <div className="col-md-6">
            <img src="assets/imagenes/mision.png" alt="Misión" />
          </div>
          <div className="col-md-6">
            <p>Nuestra misión es proporcionar a los dueños de locales a lo largo y ancho del país acceso a una amplia variedad de ropa de alta calidad que impulse el atractivo y la diferenciación de sus negocios. Nos comprometemos a ofrecer productos de moda vanguardista, diseñados para satisfacer las necesidades cambiantes de los consumidores y adaptarse a las últimas tendencias. Buscamos ser el socio estratégico de confianza para nuestros clientes, brindándoles soluciones integrales que no solo se centren en la moda, sino también en la sostenibilidad y la rentabilidad de sus operaciones. A través de un compromiso inquebrantable con la excelencia, la innovación y la atención al cliente, aspiramos a ser líderes en la industria y contribuir al éxito duradero de los negocios de nuestros clientes a nivel nacional.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const VisionSection = () => {
    return (
      <section id="vision">
        <div className="container">
          <h2>Visión</h2>
          <div className="row">
            <div className="col-md-6">
              <p>Nos visualizamos como la principal elección para los dueños de locales en todo el país, siendo reconocidos como el socio estratégico de confianza que ofrece soluciones integrales en moda. Nos esforzamos por proporcionar una amplia gama de productos de alta calidad, tendencias vanguardistas y servicios excepcionales que superen las expectativas de nuestros clientes. Buscamos ser líderes en la industria al inspirar a nuestros clientes, impulsar el éxito de sus negocios y contribuir al crecimiento sostenible de la moda en el mercado nacional. Nuestra visión es crear un impacto positivo en la industria de la moda, siendo reconocidos no solo por la calidad de nuestros productos, sino también por nuestro compromiso con la innovación, la sostenibilidad y la excelencia en el servicio al cliente.</p>
            </div>
            <div className="col-md-6">
              <img src="assets/imagenes/vision.png" alt="Visión" />
            </div>
          </div>
        </div>
      </section>
    );
  };

const CorporateInfoSection = () => {
  return (
    <section id="corporate-info">
      <div className="container">
        <h2>Información Corporativa</h2>
        <div className="row">
          <div className="col col-md-6">
            <h3>Jefe de la Corporación</h3>
            <p>Nombre: Yuverly Alexander Verdezoto Lojan</p>
            <p>Correo: yuverly.verdezoto@epn.edu.ec</p>
            <p>Número de Teléfono: 096 118 9229</p>
          </div>
          <div className="col col-md-6">
            <img src="assets/imagenes/jefe1.png" alt="jefe 1" className="imagen-circular" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col col-md-6">
            <h3>Gerente de la Corporación</h3>
            <p>Nombre: Dilan Artemio Obando Suarez</p>
            <p>Correo: dilan.obando@epn.edu.ec</p>
            <p>Número de Teléfono: 099 993 6165</p>
          </div>
          <div className="col col-md-6">
            <img src="assets/imagenes/jefe2.png" alt="jefe 2" className="imagen-circular" />
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
    return (
      <section id="location">
        <div className="container">
          <h2>Ubicación</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1994.8956610142181!2d-78.4903109612079!3d-0.21078011775407537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sepn!5e0!3m2!1ses-419!2sec!4v1705590307876!5m2!1ses-419!2sec"
            width="1080"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    );
  };
  

const Footer = () => {
    return (
      <footer>
        <p>&copy; 2024 Ropilocura - Venta de Ropa</p>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8sh+WyJ8qp6Ez7Emj2bJq6Gz/vmSP6L42u6cK1"
          crossOrigin="anonymous"
        ></script>
      </footer>
    );
  };

  const Info = () => {
    return (
      <div>
        <Navigation />
        <MisionSection />
        <VisionSection />
        <CorporateInfoSection />
        <LocationSection />
        <Footer />
      </div>
    );
  };


export {Info, Navigation, MisionSection, VisionSection, CorporateInfoSection, LocationSection, Footer };

