// import { Container, Row } from "react-bootstrap";
import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="cardBody">
      <Link to={`/itemDetail/${product.title}`} className="cardLink">
        <img
          className="cardImg"
          src={product.picture.desktop}
          alt={product.title}
          onMouseEnter={(e) =>
            (e.currentTarget.src =
              "https://media.istockphoto.com/id/1366255386/es/vector/zapatillas-medias.webp?s=612x612&w=is&k=20&c=qz_XsdKjbAxVmpl9ogP-No23DpEJOGI7pZRXx76ZZ8Y=")
          }
          onMouseLeave={(e) => (e.currentTarget.src = product.picture.desktop)}
        ></img>
        <p className="cardName">{product.title}</p>
        <p className="cardPrice">${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
