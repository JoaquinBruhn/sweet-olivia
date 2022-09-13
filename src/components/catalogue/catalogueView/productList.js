import ProductCard from "./productCard/ProductCard";
import productData from "../../../data/productData";
import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import SearchBar from "../../searchBar/SearchBar.js";
import { cats } from "../../../data/productData";
import "./productList.css";

const ProductList = () => {
  const [category, setCategory] = useState("Todos");
  const [search, setSearch] = useState(productData);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 540;

  useEffect(() => {
    const handleResizedWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizedWindow);
    return () => {
      window.removeEventListener("resize", handleResizedWindow);
    };
  }, [width, setWidth]);

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
      {width > breakpoint ? (
        <div className="listFilter">
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
      ) : (
        <Dropdown className="catsDropdown">
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Categorias
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {cats.map((el) => {
              return (
                <Dropdown.Item
                  key={el}
                  className="filter"
                  onClick={() => {
                    setCategory(el);
                  }}
                >
                  {el}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      )}
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

// <div className="catalogue">
//   <div className="listFilter ">
//     {cats.map((el) => {
//       return (
//         <p
//           key={el}
//           className="filter"
//           onClick={() => {
//             setCategory(el);
//           }}
//         >
//           {el}
//         </p>
//       );
//     })}
//   </div>
