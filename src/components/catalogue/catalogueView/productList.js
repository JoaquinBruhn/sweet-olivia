import ProductCard from "./productCard/ProductCard";
import "./productList.css";
import productData from '../../../data/productData'

const ProductList = () => {
  

  return (
    <div className="catalogue">
      <div className="listFilter d-flex">
          <p className="filter">Buzos</p>
          <p className="filter">Remeras</p>
          <p className="filter">Jeans</p>
          <p className="filter">Vestidos</p>
          <p className="filter">Otros</p>
      </div>
      
      <div className="container my-5">
        <div className="listItems">
          {productData.map((el) => {
            return (
                <ProductCard product={el} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
