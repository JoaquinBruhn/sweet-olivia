import ProductCard from "./productCard/productCard";
import "./productList.css";

const ProductList = () => {
  return (
    <div className="listBody">
      <div className="listFilter">
        <div className="catTag">Busos</div>
        <div className="catTag">Remeras</div>
        <div className="catTag">Jeans</div>
        <div className="catTag">Vestidos</div>
        <div className="catTag">Otros</div>
      </div>
      <div className="listItems">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
