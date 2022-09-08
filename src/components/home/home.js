import { Link } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import productData, { mainSlider } from "../../data/productData";
import "./home.css";

const Home = () => {
  const cats = ["buzos", "remeras", "jeans", "otros"];

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
      <Container className="homeCategories">
        <Row xs={2} lg={3}>
          {cats.map((el) => {
            const catImg = productData.find((prod) => el === prod.category);
            return (
              <Col className="homeCat" key={catImg.category}>
                <Link to="/catalogo">
                  <div style={{ backgroundImage: `url(${catImg.picture.desktop})` }}>
                    <div className="mask">
                      <p>{catImg.category}</p>
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container className="homeHowTo">
        <Row className="howToSite" id="howToSite">
          <Col>
            <div>
              <h2>1</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum excepturi magnam nostrum, perferendis quam
              hic cumque amet reiciendis voluptatibus accusamus id officia, porro laudantium optio! Obcaecati vitae
              dolores deleniti nobis.
            </p>
          </Col>
          <Col>
            <div>
              <h2>2</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum excepturi magnam nostrum, perferendis quam
              hic cumque amet reiciendis voluptatibus accusamus id officia, porro laudantium optio! Obcaecati vitae
              dolores deleniti nobis.
            </p>
          </Col>
          <Col>
            <div>
              <h2>3</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum excepturi magnam nostrum, perferendis quam
              hic cumque amet reiciendis voluptatibus accusamus id officia, porro laudantium optio! Obcaecati vitae
              dolores deleniti nobis.
            </p>
          </Col>
        </Row>
        <Row className="howToBuy" id="howToBuy">
          <Col>
            <span></span>
            <div></div>
          </Col>
          <Col>
            <span></span>
            <div></div>
          </Col>
          <Col>
            <span></span>
            <div></div>
          </Col>
        </Row>
      </Container>
      <div className="homeInstructions"></div>
    </div>
  );
};

export default Home;
