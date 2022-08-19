import ProductCard from "./productCard/ProductCard";
import "./productList.css";
import productData from "../../../data/productData";
import { useState } from "react";

const ProductList = () => {
  const [category, setCategory] = useState("");
  const categoryFilter = () => {
    if (category === "") {
      return productData;
    } else {
      let filtered = productData.filter((el) => el.category === category);
      return filtered;
    }
  };

  return (
    <div className="catalogue">
      <div className="listFilter d-flex">
        <p
          className="filter"
          onClick={() => {
            setCategory("");
          }}
        >
          Todos
        </p>
        <p
          className="filter"
          onClick={() => {
            setCategory("buzos");
          }}
        >
          Buzos
        </p>
        <p
          className="filter"
          onClick={() => {
            setCategory("remeras");
          }}
        >
          Remeras
        </p>
        <p
          className="filter"
          onClick={() => {
            setCategory("jeans");
          }}
        >
          Jeans
        </p>
        <p
          className="filter"
          onClick={() => {
            setCategory("vestidos");
          }}
        >
          Vestidos
        </p>
        <p
          className="filter"
          onClick={() => {
            setCategory("otros");
          }}
        >
          Otros
        </p>
      </div>

      <div className="container my-5">
        {categoryFilter().length > 0 ? (
          <div className="listItems">
            {categoryFilter().map((el) => {
              return <ProductCard product={el} key={el.title} />;
            })}
          </div>
        ) : (
          <h1>Por el momento no hay productos de este tipo disponibles</h1>
        )}
      </div>
    </div>
  );
};

export default ProductList;
