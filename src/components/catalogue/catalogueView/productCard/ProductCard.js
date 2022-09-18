import { useState } from "react";
import { Link } from "react-router-dom";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const [bgprod, setbgprod] = useState(product.picture[0]);

  return (
    <div className="cardBody">
      <Link to={`/itemDetail/${product.title}`} className="cardLink">
        {product.picture[1] ? (
          <div
            className="cardImg"
            style={{ backgroundImage: `url(${bgprod})` }}
            onMouseEnter={() => setbgprod(product.picture[1])}
            onMouseLeave={() => setbgprod(product.picture[0])}
          >
            {product.discount ? (
              <div className="cardDiscount">
                <p>{product.discount}</p>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="cardImg" style={{ backgroundImage: `url(${bgprod})` }}>
            {product.discount ? (
              <div className="cardDiscount">
                <p>{product.discount}</p>
              </div>
            ) : null}
          </div>
        )}
        <p className="cardName">{product.title}</p>
        <p className="cardPrice">${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
// "https://media.istockphoto.com/id/1366255386/es/vector/zapatillas-medias.webp?s=612x612&w=is&k=20&c=qz_XsdKjbAxVmpl9ogP-No23DpEJOGI7pZRXx76ZZ8Y="
