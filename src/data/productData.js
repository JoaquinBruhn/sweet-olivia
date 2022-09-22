import buzos from "./catalogue/productBuzos";
import otros from "./catalogue/productOtros";
import remeras from "./catalogue/productRemeras";
import vestidos from "./catalogue/productVestidos";
import pantalones from "./catalogue/productPantalones";
import remerones from "./catalogue/productRemerones";
import bikinis from "./catalogue/productBikinis"
import tops from "./catalogue/productTops"

const productData = [...buzos, ...remeras,...remerones, ...vestidos, ...pantalones, ...bikinis, ...tops, ...otros];

export const cats = ["Todos", "Buzos", "Remeras","Remerones", "Jeans", "Bikinis", "Tops", "Otros"];

export const mainSlider = [
  {
    title: "Slider 1",
    image: "https://i.ibb.co/tqxTD0D/Frame-20.jpg",
  },
  {
    title: "Slider 2",
    image: "https://i.ibb.co/hmNjhBg/Frame-19.jpg",
  },
];

export const getProduct = (title) => {
  const searchedProd = productData.find((prod) => prod.title === title);
  return searchedProd;
};

export const number = "+54 1178974932";

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
