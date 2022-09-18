import buzos from "./catalogue/productBuzos";
import otros from "./catalogue/productOtros";
import remeras from "./catalogue/productRemeras";
import vestidos from "./catalogue/productVestidos";
import pantalones from "./catalogue/productPantalones";

const productData = [...buzos, ...remeras, ...vestidos, ...pantalones, ...otros];

export const cats = ["Todos", "Buzos", "Remeras", "Pantalones", "Vestidos", "Otros"];

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
