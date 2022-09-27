import buzos from "./catalogue/productBuzos";
import otros from "./catalogue/productOtros";
import remeras from "./catalogue/productRemeras";
import vestidos from "./catalogue/productVestidos";
import pantalones from "./catalogue/productPantalones";
import remerones from "./catalogue/productRemerones";
import bikinis from "./catalogue/productBikinis";
import tops from "./catalogue/productTops";

const productData = [...buzos, ...remeras, ...vestidos, ...tops, ...bikinis, ...pantalones, ...remerones, ...otros];

export const cats = ["Todos", "Buzos", "Remeras", "Remerones", "Jeans", "Bikinis", "Tops", "Otros"];

export const mainSlider = [
  {
    title: "Slider 1",
    image: "https://i.postimg.cc/44LtMqrR/Frame-23.png",
  },
  {
    title: "Slider 2",
    image: "https://i.postimg.cc/BbVKKPxn/Frame-22.png",
  },
  {
    title: "Slider 3",
    image: "https://i.postimg.cc/N0FvNyTc/Frame-19.png",
  },
];

export const getProduct = (title) => {
  const searchedProd = productData.find((prod) => prod.title === title);
  return searchedProd;
};

export const number = "+54 123456789";

export default productData;

/*
const productSkeleton = {
  title: "",
  category: "",
  size: ["", ""],
  color: [
    { colorName: "", colorValue: "" },
    { colorName: "", colorValue: "" },
  ],
  price: 11,
  discount: false,
  picture: ["", ""],
  description: "",
  stock: 11,
};
*/
