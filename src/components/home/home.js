import { Link } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import productData, { mainSlider, cats } from "../../data/productData";
import "./home.css";

const Home = () => {
  return (
    <div className="homeBody">
      <div className="homeSlider">
        <Carousel>
          {mainSlider.map((el) => {
            return (
              <Carousel.Item key={el.title}>
                <img className="homeSliderSlide w-100" src={el.image} alt={el.title} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div className="homeCategories">
        {cats.slice(1, -1).map((el) => {
          const catImg = productData.find((prod) => el === prod.category);
          if (catImg === undefined) {
            return null;
          }
          return (
            <div className="homeCat" key={catImg.category}>
              <Link to={`/catalogo/${catImg.category}`}>
                <div style={{ backgroundImage: `url(${catImg.picture[0]})` }}>
                  <div className="mask">
                    <p>{catImg.category}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <Container className="homeHowTo">
        <h2>¿CÓMO COMPRAR?</h2>
        <Row className="howToSite" id="howToSite">
          <Col>
            <div>
              <h2>1</h2>
            </div>
            <p>Elegí los productos que te interesen a través de nuestro catálogo.</p>
          </Col>
          <Col>
            <div>
              <h2>2</h2>
            </div>
            <p>Una vez elegido el producto y el talle clickeá el botón “Comprar” que te redirecciona al WhatsApp.</p>
          </Col>
          <Col>
            <div>
              <h2>3</h2>
            </div>
            <p>Coordiná directamente con la vendedora la forma de pago y envío.</p>
          </Col>
        </Row>
        <Row className="howToBuy" id="howToBuy">
          <Col className="logosSVG">
            <span>
              <svg width="36" height="36" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.9771 2.29165C18.5959 1.94798 19.2921 1.76764 20 1.76764C20.7079 1.76764 21.4041 1.94798 22.0229 2.29165L37.6792 10.9875C38.0038 11.168 38.2742 11.432 38.4625 11.7521C38.6507 12.0723 38.75 12.4369 38.75 12.8083V29.9646C38.7498 30.7076 38.551 31.437 38.174 32.0773C37.7971 32.7176 37.2558 33.2455 36.6063 33.6062L22.0229 41.7104C21.4041 42.0541 20.7079 42.2344 20 42.2344C19.2921 42.2344 18.5959 42.0541 17.9771 41.7104L3.39375 33.6062C2.74449 33.2457 2.2034 32.7181 1.82649 32.0782C1.44958 31.4383 1.25055 30.7093 1.25 29.9667V12.8083C1.24998 12.4369 1.34926 12.0723 1.53753 11.7521C1.72581 11.432 1.99624 11.168 2.32083 10.9875L17.9792 2.29165H17.9771Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.625 6.375L29.375 16.7917V24.0833M7.5 22.6833L13.75 26.1667"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.25 11.5833L20 22M20 22L38.75 11.5833M20 22V42.8333"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="svgText">
              <h5>ENVIOS A TODO EL PAÍS</h5>
              <p>A traves de Correo Argentino </p>
            </div>
          </Col>
          <Col className="logosSVG">
            <span>
              <svg width="40" height="40" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M39.6875 0.1875H2.3125C1.51738 0.1875 0.875 0.829883 0.875 1.625V30.375C0.875 31.1701 1.51738 31.8125 2.3125 31.8125H39.6875C40.4826 31.8125 41.125 31.1701 41.125 30.375V1.625C41.125 0.829883 40.4826 0.1875 39.6875 0.1875ZM4.10938 3.42188H37.8906V8.8125H4.10938V3.42188ZM37.8906 28.5781H4.10938V12.7656H37.8906V28.5781ZM27.2441 25.7031H34.6562C34.8539 25.7031 35.0156 25.5414 35.0156 25.3438V22.1094C35.0156 21.9117 34.8539 21.75 34.6562 21.75H27.2441C27.0465 21.75 26.8848 21.9117 26.8848 22.1094V25.3438C26.8848 25.5414 27.0465 25.7031 27.2441 25.7031Z"
                  fill="black"
                />
              </svg>
            </span>
            <div className="svgText">
              <h5>METODOS DE PAGO</h5>
              <p>Efectivo,Mercado Pago,</p>
              <p>Transferencia Bancaria</p>
            </div>
          </Col>
          <Col className="logosSVG">
            <span>
              <svg width="36" height="36" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32.791 15.8542L18.0619 30.5833L9.22852 21.75L12.166 18.8125L18.0619 24.7083L29.8535 12.9167L32.791 15.8542V15.8542ZM4.33268 21C4.33268 16.1458 6.45768 11.7917 9.79102 8.75001L14.7494 13.7083V1.20834H2.24935L6.83268 5.79168C2.74935 9.58334 0.166016 14.9792 0.166016 21C0.166016 31.8125 8.39518 40.6875 18.916 41.7292V37.5208C10.7077 36.5 4.33268 29.4792 4.33268 21ZM41.8327 21C41.8327 10.1875 33.6035 1.31251 23.0827 0.270844V4.47918C31.291 5.50001 37.666 12.5208 37.666 21C37.666 25.8542 35.541 30.2083 32.2077 33.25L27.2494 28.2917V40.7917H39.7494L35.166 36.2083C39.2494 32.4167 41.8327 27.0208 41.8327 21Z"
                  fill="black"
                />
              </svg>
            </span>
            <div className="svgText">
              <h5>DEVOLUCIONES</h5>
              <p>Via WhatsApp</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="homeInstructions">
        <h2>SOBRE SWEET OLIVIA</h2>
        <div className="aboutText">
          <p>
            Sweet Olivia es una marca de indumentaria y accesorios femeninos y para cualquiera que se sienta
            identificado con nuestros productos. Fue fundada en la ciudad de Buenos Aires, Argentina en el año 2019.
          </p>
          <p>
            Este pequeño emprendimiento comenzó con una bolsita de accesorios y hoy en día es una estantería llena de
            diferentes productos desde ropa para salir, ropa deportiva, zapatos, mochilas y carteras, entre muchas más.
            Proyectamos seguir creciendo y en un futuro lograr conseguir una tienda física.
          </p>
          <p>
            Cuando fue el momento de elegir el nombre para la marca, sin dudarlo, pensamos en esa persona maravillosa
            que hoy no está en este plano, pero seguramente nos está acompañando cada día y en cada decisión.
          </p>
          <p>Te invitamos a que te sientas libre y cómoda con lo que uses, porque "Vivir libre, o nada".</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
