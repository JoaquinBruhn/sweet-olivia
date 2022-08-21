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
              <Carousel.Item>
                <img className="d-block w-100" src={el.image} alt={el.title} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <Container className="homeCategories">
        <Row xs={2} lg={3}>
          {cats.map((el) => {
            const catImg = productData.find((prod) => el === prod.category);
            console.log(catImg);
            return (
              <Col className="homeCat" key={catImg.title}>
                <img src={catImg.picture.desktop} alt={catImg.title}></img>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container className="homeHowTo">
        <Row className="howToSite">
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
        <Row className="HowToBuy">
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
