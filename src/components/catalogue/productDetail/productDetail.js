import { useParams } from "react-router-dom";
import { getProduct } from "../../../data/productData";
import "./productDetail.css";
import Whatsapp from "../../../mini-components/Whatsapp.js";
import { useState } from "react";

const ProductDetail = () => {
  const { itemTitle } = useParams();
  const product = getProduct(itemTitle);

  //useState(getProduct.size[0])
  const [size,setSize]= useState(product.size[0])
  const [color, setColor] = useState(product.color[0].colorName)


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
                <div className={ size === el ? "sampleCircle selectedCircle" : "sampleCircle"} onClick={() => {setSize(el)}} key={el}>
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
              return <div className={ color === el.colorName ? "sampleCircle selectedCircle" : "sampleCircle" } onClick={() => {setColor(el.colorName)}} style={{ backgroundColor: el.colorValue }} key={el.colorName}></div>;
            })}
          </div>
        </div>
        <p className="text-left ">{product.description}</p>
        <Whatsapp title={product.title} size={size} color={color}/>
      </div>
    </div>
  );
};

export default ProductDetail;
