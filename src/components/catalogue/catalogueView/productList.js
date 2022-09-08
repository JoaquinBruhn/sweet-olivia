import ProductCard from "./productCard/ProductCard";
import productData from "../../../data/productData";
import { useState } from "react";
import SearchBar from "../../searchBar/SearchBar.js";
import { cats } from "../../../data/productData";
import { useParams } from "react-router-dom";
import "./productList.css";

const ProductList = () => {
  const { test } = useParams();
  const [category, setCategory] = useState(test ? test : "Todos");
  const [search, setSearch] = useState(productData);

  console.log(test);

  const categoryFilter = () => {
    if (category === "Todos") {
      return search;
    } else {
      let filtered = search.filter((el) => el.category === category);
      return filtered;
    }
  };

  return (
    <div className="catalogue">
      <div className="listFilter ">
        {cats.map((el) => {
          return (
            <p
              key={el}
              className="filter"
              onClick={() => {
                setCategory(el);
              }}
            >
              {el}
            </p>
          );
        })}
      </div>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="catalogueList container my-5">
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
