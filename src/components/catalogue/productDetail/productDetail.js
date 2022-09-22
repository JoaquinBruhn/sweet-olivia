import { useParams } from "react-router-dom";
import { useState } from "react";
import { getProduct } from "../../../data/productData";
import WhatsappButton from "../../../mini-components/WhatsappButton";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./productDetail.css";

const ProductDetail = () => {
  const { itemTitle } = useParams();
  const product = getProduct(itemTitle);
  let i = 0;

  const [size, setSize] = useState(product.size[0]);
  const [color, setColor] = useState(product.color[0].colorName);

  return (
    <Container>
      <Row className="d-flex my-4" xs={1} lg={2}>
        <Col>
          <Carousel>
            {product.picture.map((el) => {
              i++;
              let elementKey = "picture" + i;
              return (
                <Carousel.Item key={elementKey}>
                  <img className="d-block w-100" src={el} alt={el} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>

        <Col className="productInfo d-flex flex-column ">
          <div className="detailTitleContainer">
            <h2 className="productTitle">{product.title}</h2>
            <h2 className="productPrice">${product.price}</h2>
          </div>
          <div className="detailSizeContainer">
            <p className="productSizeTitle">TALLE</p>
            <div className="d-flex">
              {product.size.map((el) => {
                return (
                  <div
                    className={size === el ? "sampleCircle selectedCircle" : "sampleCircle"}
                    onClick={() => {
                      setSize(el);
                    }}
                    key={el}
                  >
                    <p>{el}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="detailColorContainer">
            <p className="productColorTitle">COLORES</p>
            <div className="d-flex">
              {product.color.map((el) => {
                return (
                  <div
                    className={color === el.colorName ? "sampleCircle selectedCircle" : "sampleCircle"}
                    onClick={() => {
                      setColor(el.colorName);
                    }}
                    style={{ backgroundColor: el.colorValue }}
                    key={el.colorName}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="wspContainer">
          <WhatsappButton title={product.title} size={size} color={color} />
          </div>
          {product.description ? (
            <div className="detailDescriptionContainer">
              <p className="productDescription">{product.description}</p>
            </div>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
