import { useParams } from "react-router-dom";
import { getProduct } from "../../../data/productData";
import "./productDetail.css";

const ProductDetail = () => {
  const { itemTitle } = useParams();

  const product = getProduct(itemTitle);
  console.log(product);

  return (
    <div className="d-flex container my-5">
      <img className="col-6" src={product.picture.desktop} alt={product.title}></img>

      <div className="productInfo d-flex flex-column col-6 py-2">
        <h2 className="text-left ">{product.title}</h2>
        <h2 className="text-left ">${product.price}</h2>
        <div>
          <p className="align-left ">TALLE</p>
          <div className="d-flex">
            {product.size.map((el) => {
              return (
                <div className="sampleCircle" key={el}>
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
              return <div className="sampleCircle" style={{ backgroundColor: el }} key={el}></div>;
            })}
          </div>
        </div>
        <p className="text-left ">{product.description}</p>
        <button className="purchaseButon">Comprar</button>
      </div>
    </div>
  );
};

export default ProductDetail;
