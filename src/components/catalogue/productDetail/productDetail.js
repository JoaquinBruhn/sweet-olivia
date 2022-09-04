import { useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../data/productData";
import Whatsapp from "../../../mini-components/Whatsapp.js";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./productDetail.css";

const ProductDetail = () => {
  const { itemTitle } = useParams();
  const product = getProduct(itemTitle);

  //useState(getProduct.size[0])
  const [size, setSize] = useState(product.size[0]);
  const [color, setColor] = useState(product.color[0].colorName);

  return (
    <Container>
      <Row className="d-flex my-5" xs={1} lg={2}>
        <Col>
          <Carousel>
            {[product.picture.desktop, product.picture.tablet, product.picture.mobile].map((el) => {
              return (
                <Carousel.Item key={el}>
                  <img className="d-block w-100" src={el} alt={el} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>

        <Col className="productInfo d-flex flex-column ">
          <h2 className="text-left ">{product.title}</h2>
          <h2 className="text-left ">${product.price}</h2>
          <div>
            <p className="align-left ">TALLE</p>
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
          <div>
            <p className="align-left ">COLORES</p>
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
          <p className="text-left ">{product.description}</p>
          <Whatsapp title={product.title} size={size} color={color} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
