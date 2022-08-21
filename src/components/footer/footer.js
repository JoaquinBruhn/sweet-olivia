import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row className="footerLinks">
        <Col xs={2}>
          <div>
            <h6>Home</h6>
            <h6>Nosotros</h6>
            <h6>Como Comprar</h6>
            <h6>Catalogo</h6>
          </div>
        </Col>
        <Col xs={2}>
          <div>
            <h6>Politica de privacidad</h6>
            <h6>Politica de cookies</h6>
            <h6>Politica de devoluciones</h6>
            <h6>Envios</h6>
          </div>
        </Col>
        <Col xs={{ span: 1, offset: 7 }}>
          <h6>a</h6>
          <h6>a</h6>
        </Col>
      </Row>
      <Row className="reservedRights">
        <Col>
          <p>Sweet Olivia 2022 - Todos los derechos reservados</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
