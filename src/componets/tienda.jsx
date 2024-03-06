import React from 'react';

const Header = () => {
      return (
        <header>
          <div className="row">
            <div className="col">
              <img src="assets/imagenes/logo.png" alt="" />
            </div>
            <div className="col">
              BIENVENIDOS A ROPILOOCURA
            </div>
          </div>
        </header>
      );
};

const Navigation = () => {
      return (
        <main>
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
        </main>
      );
};

const CategorySection = () => {
        return (
          <div className="category-section">
            <div className="row">
              <div className="col-md-4">
                <div className="category-box">
                  <a href="#Gorras"><h3>Gorras</h3></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="category-box">
                  <a href="#Camisetas"><h3>Camisetas</h3></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="category-box">
                  <a href="#Sudaderas"><h3>Sudaderas</h3></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="category-box">
                  <a href="#Boxers"><h3>Boxers</h3></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="category-box">
                  <a href="#Pantalones"><h3>Pantalones</h3></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="category-box">
                  <a href="#Zapatos"><h3>Zapatos</h3></a>
                </div>
              </div>
            </div>
          </div>
        );
};

const ProductCard = ({ imgSrc, productName, description, price }) => {
    return (
      <div className="product-card">
        <img src={imgSrc} alt={productName} />
        <h3>{productName}</h3>
        <p>{description}</p>
        <p className="price">{`$${price}`}</p>
        <button>Añadir al carrito</button>
      </div>
    );
};

const SudaderasCatalog = () => {
    const sudaderasData = [
      {
        imgSrc: 'assets/imagenes/ropa1.png',
        productName: 'Sudadera Verde',
        description: '¡Destaca con estilo en nuestra sudadera verde! Confeccionada con suave tela y un vibrante tono verde, esta prenda es la combinación perfecta de comodidad y moda. Ideal para destacar en cualquier ocasión, mantente a la moda mientras te mantienes abrigado. ¡No te pierdas esta pieza imprescindible para tu armario.',
        price: 19.99,
      },
      {
        imgSrc: 'assets/imagenes/ropa2.png',
        productName: 'Sudadera Roja',
        description: '¡Destaca con estilo en nuestra sudadera roja! Confeccionada con suave tela y un vibrante tono verde, esta prenda es la combinación perfecta de comodidad y moda. Ideal para destacar en cualquier ocasión, mantente a la moda mientras te mantienes abrigado. ¡No te pierdas esta pieza imprescindible para tu armario.',
        price: 19.99,
      },
      {
        imgSrc: 'assets/imagenes/ropa3.png',
        productName: 'Sudadera Naranja',
        description: '¡Destaca con estilo en nuestra sudadera naranja! Confeccionada con suave tela y un vibrante tono verde, esta prenda es la combinación perfecta de comodidad y moda. Ideal para destacar en cualquier ocasión, mantente a la moda mientras te mantienes abrigado. ¡No te pierdas esta pieza imprescindible para tu armario.',
        price: 19.99,
      },
      {
        imgSrc: 'assets/imagenes/ropa4.png',
        productName: 'Sudadera Amarilla',
        description: '¡Destaca con estilo en nuestra sudadera amarilla! Confeccionada con suave tela y un vibrante tono verde, esta prenda es la combinación perfecta de comodidad y moda. Ideal para destacar en cualquier ocasión, mantente a la moda mientras te mantienes abrigado. ¡No te pierdas esta pieza imprescindible para tu armario.',
        price: 19.99,
      },
      {
        imgSrc: 'assets/imagenes/ropa5.png',
        productName: 'Sudadera Azul',
        description: '¡Destaca con estilo en nuestra sudadera azul! Confeccionada con suave tela y un vibrante tono verde, esta prenda es la combinación perfecta de comodidad y moda. Ideal para destacar en cualquier ocasión, mantente a la moda mientras te mantienes abrigado. ¡No te pierdas esta pieza imprescindible para tu armario.',
        price: 19.99,
      },
      {
        imgSrc: 'assets/imagenes/ropa6.png',
        productName: 'Sudadera Rosa',
        description: '¡Destaca con estilo en nuestra sudadera rosa! Confeccionada con suave tela y un vibrante tono verde, esta prenda es la combinación perfecta de comodidad y moda. Ideal para destacar en cualquier ocasión, mantente a la moda mientras te mantienes abrigado. ¡No te pierdas esta pieza imprescindible para tu armario.',
        price: 19.99,
      },
      {
        imgSrc: 'assets/imagenes/ropa7.png',
        productName: 'Sudadera Celeste',
        description: '¡Destaca con estilo en nuestra sudadera celeste! Confeccionada con suave tela y un vibrante tono verde, esta prenda es la combinación perfecta de comodidad y moda. Ideal para destacar en cualquier ocasión, mantente a la moda mientras te mantienes abrigado. ¡No te pierdas esta pieza imprescindible para tu armario.',
        price: 19.99,
      },
      {
        imgSrc: 'assets/imagenes/ropa8.png',
        productName: 'Sudadera Blanco',
        description: '¡Destaca con estilo en nuestra sudadera blanca! Confeccionada con suave tela y un vibrante tono verde, esta prenda es la combinación perfecta de comodidad y moda. Ideal para destacar en cualquier ocasión, mantente a la moda mientras te mantienes abrigado. ¡No te pierdas esta pieza imprescindible para tu armario.',
        price: 19.99,
      },
      {
        imgSrc: 'assets/imagenes/ropa9.png',
        productName: 'Sudadera Negra',
        description: '¡Destaca con estilo en nuestra sudadera negra! Confeccionada con suave tela y un vibrante tono verde, esta prenda es la combinación perfecta de comodidad y moda. Ideal para destacar en cualquier ocasión, mantente a la moda mientras te mantienes abrigado. ¡No te pierdas esta pieza imprescindible para tu armario.',
        price: 19.99,
      },
  ];
};  

const PantalonesCatalog = () => {
        const pantalonesData = [
          {
            imgSrc: 'assets/imagenes/pantalon1.png',
            productName: 'Pantalon Negro',
            description: '¡Eleva tu estilo con nuestros pantalones negros! Con un diseño versátil y atemporal, estos pantalones ofrecen comodidad y elegancia en cada paso. Perfectos para cualquier ocasión, la calidad de los materiales garantiza durabilidad y un ajuste impecable.',
            price: 14.99,
          },
          {
            imgSrc: 'assets/imagenes/pantalon2.png',
            productName: 'Pantalon Blanco',
            description: '¡Eleva tu estilo con nuestros pantalones blancos! Con un diseño versátil y atemporal, estos pantalones ofrecen comodidad y elegancia en cada paso. Perfectos para cualquier ocasión, la calidad de los materiales garantiza durabilidad y un ajuste impecable.',
            price: 14.99,
          },
          {
            imgSrc: 'assets/imagenes/pantalon3.png',
            productName: 'Pantalon Cafe Claro',
            description: '¡Eleva tu estilo con nuestros pantalones Cafe Claro! Con un diseño versátil y atemporal, estos pantalones ofrecen comodidad y elegancia en cada paso. Perfectos para cualquier ocasión, la calidad de los materiales garantiza durabilidad y un ajuste impecable.',
            price: 14.99,
          },
          {
            imgSrc: 'assets/imagenes/pantalon4.png',
            productName: 'Pantalon Azul Marino',
            description: '¡Eleva tu estilo con nuestros pantalones azules marinos! Con un diseño versátil y atemporal, estos pantalones ofrecen comodidad y elegancia en cada paso. Perfectos para cualquier ocasión, la calidad de los materiales garantiza durabilidad y un ajuste impecable.',
            price: 14.99,
          },
          {
            imgSrc: 'assets/imagenes/pantalon5.png',
            productName: 'Pantalon Caqui',
            description: '¡Eleva tu estilo con nuestros pantalones Caqui! Con un diseño versátil y atemporal, estos pantalones ofrecen comodidad y elegancia en cada paso. Perfectos para cualquier ocasión, la calidad de los materiales garantiza durabilidad y un ajuste impecable.',
            price: 14.99,
          },
          {
            imgSrc: 'assets/imagenes/pantalon6.png',
            productName: 'Pantalon Celeste',
            description: '¡Eleva tu estilo con nuestros pantalones celeste! Con un diseño versátil y atemporal, estos pantalones ofrecen comodidad y elegancia en cada paso. Perfectos para cualquier ocasión, la calidad de los materiales garantiza durabilidad y un ajuste impecable.',
            price: 14.99,
          },
          {
            imgSrc: 'assets/imagenes/pantalon7.png',
            productName: 'Pantalon Gris',
            description: '¡Eleva tu estilo con nuestros pantalones beige! Con un diseño versátil y atemporal, estos pantalones ofrecen comodidad y elegancia en cada paso. Perfectos para cualquier ocasión, la calidad de los materiales garantiza durabilidad y un ajuste impecable.',
            price: 14.99,
          },
          {
            imgSrc: 'assets/imagenes/pantalon8.png',
            productName: 'Pantalon Beige',
            description: '¡Eleva tu estilo con nuestros pantalones beige! Con un diseño versátil y atemporal, estos pantalones ofrecen comodidad y elegancia en cada paso. Perfectos para cualquier ocasión, la calidad de los materiales garantiza durabilidad y un ajuste impecable.',
            price: 14.99,
          },
          {
            imgSrc: 'assets/imagenes/pantalon9.png',
            productName: 'Pantalon Morado',
            description: '¡Destaca con estilo en nuestra sudadera negra! Confeccionada con suave tela y un vibrante tono verde, esta prenda es la combinación perfecta de comodidad y moda. Ideal para destacar en cualquier ocasión, mantente a la moda mientras te mantienes abrigado. ¡No te pierdas esta pieza imprescindible para tu armario.',
            price: 19.99,
          },

        ];
      };
const BoxersCatalog = () => {
            const boxersData = [
              {
                imgSrc: 'assets/imagenes/boxer1.png',
                productName: 'Boxer Blanco',
                description: 'Experimenta la comodidad y el estilo con nuestro boxer blanco. Confeccionado con suave tela que se adapta a tu cuerpo, este boxer ofrece un ajuste perfecto y un toque de elegancia. Ideal para cualquier ocasión, su diseño clásico en negro agrega un toque de sofisticación a tu colección de ropa interior.',
                price: 4.99,
              },
              {
                imgSrc: 'assets/imagenes/boxer2.png',
                productName: 'Boxer Cafe',
                description: 'Experimenta la comodidad y el estilo con nuestro boxer cafe. Confeccionado con suave tela que se adapta a tu cuerpo, este boxer ofrece un ajuste perfecto y un toque de elegancia. Ideal para cualquier ocasión, su diseño clásico en negro agrega un toque de sofisticación a tu colección de ropa interior.',
                price: 4.99,
              },
              {
                imgSrc: 'assets/imagenes/boxer3.png',
                productName: 'Boxer Gris',
                description: 'Experimenta la comodidad y el estilo con nuestro boxer gris. Confeccionado con suave tela que se adapta a tu cuerpo, este boxer ofrece un ajuste perfecto y un toque de elegancia. Ideal para cualquier ocasión, su diseño clásico en negro agrega un toque de sofisticación a tu colección de ropa interior.',
                price: 4.99,
              },
              {
                imgSrc: 'assets/imagenes/boxer4.png',
                productName: 'Boxer Azul Grisaseo',
                description: 'Experimenta la comodidad y el estilo con nuestro boxer azul grisaseo. Confeccionado con suave tela que se adapta a tu cuerpo, este boxer ofrece un ajuste perfecto y un toque de elegancia. Ideal para cualquier ocasión, su diseño clásico en negro agrega un toque de sofisticación a tu colección de ropa interior.',
                price: 4.99,
              },
              {
                imgSrc: 'assets/imagenes/boxer5.png',
                productName: 'Boxer Rosa',
                description: 'Experimenta la comodidad y el estilo con nuestro boxer rosa. Confeccionado con suave tela que se adapta a tu cuerpo, este boxer ofrece un ajuste perfecto y un toque de elegancia. Ideal para cualquier ocasión, su diseño clásico en negro agrega un toque de sofisticación a tu colección de ropa interior.',
                price: 4.99,
              },
              {
                imgSrc: 'assets/imagenes/boxer6.png',
                productName: 'Boxer Piel',
                description: 'Experimenta la comodidad y el estilo con nuestro boxer piel. Confeccionado con suave tela que se adapta a tu cuerpo, este boxer ofrece un ajuste perfecto y un toque de elegancia. Ideal para cualquier ocasión, su diseño clásico en negro agrega un toque de sofisticación a tu colección de ropa interior.',
                price: 4.99,
              },
              {
                imgSrc: 'assets/imagenes/boxer7.png',
                productName: 'Boxer Verde',
                description: 'Experimenta la comodidad y el estilo con nuestro boxer verde. Confeccionado con suave tela que se adapta a tu cuerpo, este boxer ofrece un ajuste perfecto y un toque de elegancia. Ideal para cualquier ocasión, su diseño clásico en negro agrega un toque de sofisticación a tu colección de ropa interior.',
                price: 4.99,
              },
              {
                imgSrc: 'assets/imagenes/boxer8.png',
                productName: 'Boxer Rojo',
                description: 'Experimenta la comodidad y el estilo con nuestro boxer rojo. Confeccionado con suave tela que se adapta a tu cuerpo, este boxer ofrece un ajuste perfecto y un toque de elegancia. Ideal para cualquier ocasión, su diseño clásico en negro agrega un toque de sofisticación a tu colección de ropa interior.',
                price: 4.99,
              },
              {
                imgSrc: 'assets/imagenes/boxer9.png',
                productName: 'Boxer Negro',
                description: 'Experimenta la comodidad y el estilo con nuestro boxer negro. Confeccionado con suave tela que se adapta a tu cuerpo, este boxer ofrece un ajuste perfecto y un toque de elegancia. Ideal para cualquier ocasión, su diseño clásico en negro agrega un toque de sofisticación a tu colección de ropa interior.',
                price: 4.99,
              },
            ];
          
            return (
              <div>
                <h2>Catálogo Boxers</h2>
                <div className="catalog-container" id="Boxers">
                  {boxersData.map((boxer, index) => (
                    <div className="product-card" key={index}>
                      <img src={boxer.imgSrc} alt={boxer.productName} />
                      <h3>{boxer.productName}</h3>
                      <p>{boxer.description}</p>
                      <p className="price">{`$${boxer.price}`}</p>
                      <button>Añadir al carrito</button>
                    </div>
                  ))}
                </div>
              </div>
            );
};

const CamisetasCatalog = () => {
            const camisetasData = [
              {
                imgSrc: 'assets/imagenes/camiseta1.png',
                productName: 'Camiseta Blanca',
                description: 'Eleva tu estilo con nuestra camiseta blanca, una pieza esencial en cualquier guardarropa. La suave tela proporciona comodidad durante todo el día, mientras que el diseño versátil te permite crear looks desde casuales hasta elegantes.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/camiseta2.png',
                productName: 'Camiseta Roja',
                description: 'Eleva tu estilo con nuestra camiseta roja, una pieza esencial en cualquier guardarropa. La suave tela proporciona comodidad durante todo el día, mientras que el diseño versátil te permite crear looks desde casuales hasta elegantes.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/camiseta3.png',
                productName: 'Camiseta Amarilla',
                description: 'Eleva tu estilo con nuestra camiseta amarilla, una pieza esencial en cualquier guardarropa. La suave tela proporciona comodidad durante todo el día, mientras que el diseño versátil te permite crear looks desde casuales hasta elegantes.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/camiseta4.png',
                productName: 'Camiseta Verde Lima',
                description: 'Eleva tu estilo con nuestra camiseta verde lima, una pieza esencial en cualquier guardarropa. La suave tela proporciona comodidad durante todo el día, mientras que el diseño versátil te permite crear looks desde casuales hasta elegantes.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/camiseta5.png',
                productName: 'Camiseta Negra',
                description: 'Eleva tu estilo con nuestra camiseta negra, una pieza esencial en cualquier guardarropa. La suave tela proporciona comodidad durante todo el día, mientras que el diseño versátil te permite crear looks desde casuales hasta elegantes.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/camiseta6.png',
                productName: 'Camiseta Rosa',
                description: 'Eleva tu estilo con nuestra camiseta rosa, una pieza esencial en cualquier guardarropa. La suave tela proporciona comodidad durante todo el día, mientras que el diseño versátil te permite crear looks desde casuales hasta elegantes.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/camiseta7.png',
                productName: 'Camiseta Morada',
                description: 'Eleva tu estilo con nuestra camiseta morada, una pieza esencial en cualquier guardarropa. La suave tela proporciona comodidad durante todo el día, mientras que el diseño versátil te permite crear looks desde casuales hasta elegantes.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/camiseta8.png',
                productName: 'Camiseta Verde Oscura',
                description: 'Eleva tu estilo con nuestra camiseta verde oscura, una pieza esencial en cualquier guardarropa. La suave tela proporciona comodidad durante todo el día, mientras que el diseño versátil te permite crear looks desde casuales hasta elegantes.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/camiseta9.png',
                productName: 'Camiseta Azul Oscura',
                description: 'Eleva tu estilo con nuestra camiseta azul oscura, una pieza esencial en cualquier guardarropa. La suave tela proporciona comodidad durante todo el día, mientras que el diseño versátil te permite crear looks desde casuales hasta elegantes.',
                price: 9.99,
              },
            ];
          
            return (
              <div>
                <h2>Catálogo Camisetas</h2>
                <div className="catalog-container" id="Camisetas">
                  {camisetasData.map((camiseta, index) => (
                    <div className="product-card" key={index}>
                      <img src={camiseta.imgSrc} alt={camiseta.productName} />
                      <h3>{camiseta.productName}</h3>
                      <p>{camiseta.description}</p>
                      <p className="price">{`$${camiseta.price}`}</p>
                      <button>Añadir al carrito</button>
                    </div>
                  ))}
                </div>
              </div>
            );
};
const ZapatosCatalog = () => {
            const zapatosData = [
              {
                imgSrc: 'assets/imagenes/zapatos1.png',
                productName: 'Zapatos Amarillos',
                description: 'Destaca con estilo en nuestros zapatos amarillos. Con un vibrante color que ilumina cualquier look, estos zapatos no solo son llamativos sino también cómodos. La calidad de la construcción garantiza durabilidad, mientras que el diseño moderno agrega un toque de moda a tu calzado.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/zapatos2.png',
                productName: 'Zapatos Naranjas',
                description: 'Destaca con estilo en nuestros zapatos naranjas. Con un vibrante color que ilumina cualquier look, estos zapatos no solo son llamativos sino también cómodos. La calidad de la construcción garantiza durabilidad, mientras que el diseño moderno agrega un toque de moda a tu calzado.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/zapatos3.png',
                productName: 'Zapatos Rojos',
                description: 'Destaca con estilo en nuestros zapatos rojos. Con un vibrante color que ilumina cualquier look, estos zapatos no solo son llamativos sino también cómodos. La calidad de la construcción garantiza durabilidad, mientras que el diseño moderno agrega un toque de moda a tu calzado.',
                price: 19.99,
              },
              {
                imgSrc: 'assets/imagenes/zapatos4.png',
                productName: 'Zapatos Verdes',
                description: 'Destaca con estilo en nuestros zapatos verdes. Con un vibrante color que ilumina cualquier look, estos zapatos no solo son llamativos sino también cómodos. La calidad de la construcción garantiza durabilidad, mientras que el diseño moderno agrega un toque de moda a tu calzado.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/zapatos5.png',
                productName: 'Zapatos Rosas',
                description: 'Destaca con estilo en nuestros zapatos rosas. Con un vibrante color que ilumina cualquier look, estos zapatos no solo son llamativos sino también cómodos. La calidad de la construcción garantiza durabilidad, mientras que el diseño moderno agrega un toque de moda a tu calzado.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/zapatos6.png',
                productName: 'Zapatos Azules',
                description: 'Destaca con estilo en nuestros zapatos azules. Con un vibrante color que ilumina cualquier look, estos zapatos no solo son llamativos sino también cómodos. La calidad de la construcción garantiza durabilidad, mientras que el diseño moderno agrega un toque de moda a tu calzado.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/zapatos7.png',
                productName: 'Zapatos Negros',
                description: 'Destaca con estilo en nuestros zapatos negros. Con un vibrante color que ilumina cualquier look, estos zapatos no solo son llamativos sino también cómodos. La calidad de la construcción garantiza durabilidad, mientras que el diseño moderno agrega un toque de moda a tu calzado.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/zapatos8.png',
                productName: 'Zapatos Celestes',
                description: 'Destaca con estilo en nuestros zapatos celestes. Con un vibrante color que ilumina cualquier look, estos zapatos no solo son llamativos sino también cómodos. La calidad de la construcción garantiza durabilidad, mientras que el diseño moderno agrega un toque de moda a tu calzado.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/zapatos9.png',
                productName: 'Zapatos Blancos',
                description: 'Destaca con estilo en nuestros zapatos blancos. Con un vibrante color que ilumina cualquier look, estos zapatos no solo son llamativos sino también cómodos. La calidad de la construcción garantiza durabilidad, mientras que el diseño moderno agrega un toque de moda a tu calzado.',
                price: 9.99,
              },
            ];
          
            return (
              <div>
                <h2>Catálogo Zapatos</h2>
                <div className="catalog-container" id="Zapatos">
                  {zapatosData.map((zapato, index) => (
                    <div className="product-card" key={index}>
                      <img src={zapato.imgSrc} alt={zapato.productName} />
                      <h3>{zapato.productName}</h3>
                      <p>{zapato.description}</p>
                      <p className="price">{`$${zapato.price}`}</p>
                      <button>Añadir al carrito</button>
                    </div>
                  ))}
                </div>
              </div>
            );
};

const GorrasCatalog = () => {
            const gorrasData = [
              {
                imgSrc: 'assets/imagenes/gorra1.png',
                productName: 'Gorra Negra',
                description: 'Completa tu estilo con nuestra gorra negra, un accesorio versátil y atemporal. Fabricada con materiales de alta calidad, esta gorra no solo te brinda comodidad, sino que también agrega un toque de elegancia a tu atuendo.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/gorra2.png',
                productName: 'Gorra Amarilla',
                description: 'Completa tu estilo con nuestra gorra amarilla, un accesorio versátil y atemporal. Fabricada con materiales de alta calidad, esta gorra no solo te brinda comodidad, sino que también agrega un toque de elegancia a tu atuendo.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/gorra3.png',
                productName: 'Gorra Rosa',
                description: 'Completa tu estilo con nuestra gorra rosa, un accesorio versátil y atemporal. Fabricada con materiales de alta calidad, esta gorra no solo te brinda comodidad, sino que también agrega un toque de elegancia a tu atuendo.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/gorra4.png',
                productName: 'Gorra Naranja',
                description: 'Completa tu estilo con nuestra gorra naranja, un accesorio versátil y atemporal. Fabricada con materiales de alta calidad, esta gorra no solo te brinda comodidad, sino que también agrega un toque de elegancia a tu atuendo.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/gorra5.png',
                productName: 'Gorra Verde',
                description: 'Completa tu estilo con nuestra gorra verde, un accesorio versátil y atemporal. Fabricada con materiales de alta calidad, esta gorra no solo te brinda comodidad, sino que también agrega un toque de elegancia a tu atuendo.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/gorra6.png',
                productName: 'Gorra Celeste',
                description: 'Completa tu estilo con nuestra gorra celeste, un accesorio versátil y atemporal. Fabricada con materiales de alta calidad, esta gorra no solo te brinda comodidad, sino que también agrega un toque de elegancia a tu atuendo.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/gorra7.png',
                productName: 'Gorra Roja',
                description: 'Completa tu estilo con nuestra gorra roja, un accesorio versátil y atemporal. Fabricada con materiales de alta calidad, esta gorra no solo te brinda comodidad, sino que también agrega un toque de elegancia a tu atuendo.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/gorra8.png',
                productName: 'Gorra Azul',
                description: 'Completa tu estilo con nuestra gorra azul, un accesorio versátil y atemporal. Fabricada con materiales de alta calidad, esta gorra no solo te brinda comodidad, sino que también agrega un toque de elegancia a tu atuendo.',
                price: 9.99,
              },
              {
                imgSrc: 'assets/imagenes/gorra9.png',
                productName: 'Gorra Blanca',
                description: 'Completa tu estilo con nuestra gorra blanca, un accesorio versátil y atemporal. Fabricada con materiales de alta calidad, esta gorra no solo te brinda comodidad, sino que también agrega un toque de elegancia a tu atuendo.',
                price: 9.99,
              },
            ];
          
            return (
              <div>
                <h2>Catálogo Gorras</h2>
                <div className="catalog-container" id="Gorras">
                  {gorrasData.map((gorra, index) => (
                    <div className="product-card" key={index}>
                      <img src={gorra.imgSrc} alt={gorra.productName} />
                      <h3>{gorra.productName}</h3>
                      <p>{gorra.description}</p>
                      <p className="price">{`$${gorra.price}`}</p>
                      <button>Añadir al carrito</button>
                    </div>
                  ))}
                </div>
              </div>
            );
};

const Footer = () => {
            return (
              <footer>
                <p>&copy; 2024 Ropilocura - Venta de Ropa</p>
              </footer>
            );
};
          

export { GorrasCatalog, ZapatosCatalog, CamisetasCatalog,BoxersCatalog, PantalonesCatalog, SudaderasCatalog, ProductCard, CategorySection, Header, Navigation, Footer };
