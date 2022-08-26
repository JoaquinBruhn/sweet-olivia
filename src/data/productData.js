const productData = [
  {
    title: "Remera",
    category: "remeras",
    size: ["XS", "S", "M"],
    color: [
      { colorName: "Verde", colorValue: "#6BFF33" },
      { colorName: "Rojo", colorValue: "#F20505" },
      { colorName: "Celeste", colorValue: "#05F2EB" },
    ],
    price: 11,
    picture: {
      mobile: "",
      tablet: "",
      desktop:
        "https://media.istockphoto.com/id/471188329/es/foto/camiseta-roja-frontal-en-blanco-con-trazado-de-recorte.webp?s=612x612&w=is&k=20&c=f6oiR817cYR1sOVTRPwA58w4P3r0Ar_3x0hafQKWMpM=",
    },
    description: "Es una remera loco, no hay mucho mas.",
    stock: 13,
  },
  {
    title: "Pantalones",
    category: "jeans",
    size: ["XS", "S", "M"],
    color: [
      { colorName: "Verde", colorValue: "#6BFF33" },
      { colorName: "Rojo", colorValue: "#F20505" },
      { colorName: "Celeste", colorValue: "#05F2EB" },
    ],
    price: 22,
    picture: {
      mobile: "",
      tablet: "",
      desktop:
        "https://media.istockphoto.com/id/938486228/es/foto/jeans-casuales-pantalones-aislado-sobre-fondo-blanco.webp?s=612x612&w=is&k=20&c=RzFcu9UiXRHvTZVy3tq_Q-yLeAdu_bNDdBNJ-4dSuiE=",
    },
    description:
      "Pantalones hechos de piel de pantalon de la mas alta calidad. Todos los pantalones utilizados para su produccion fueron alimentados con fibra de primera.",
    stock: 63,
  },
  {
    title: "Medias",
    category: "otros",
    size: ["M", "L", "XL"],
    color: [
      { colorName: "rosa", colorValue: "#FA67FF" },
      { colorName: "Rojo", colorValue: "#F20505" },
      { colorName: "Celeste", colorValue: "#05F2EB" },
    ],
    price: 33,
    picture: {
      mobile: "",
      tablet: "",
      desktop:
        "https://media.istockphoto.com/id/1194335315/es/foto/calcetines-de-invierno-acogedores-y-c%C3%A1lidos-aislados-sobre-fondo-blanco.webp?s=612x612&w=is&k=20&c=DMrSlJcDHhxsL07LPZFFYVLfLdWL6CQHOE4JfOOwTnI=",
    },
    description: "Medias naranjas, pero las de lana no las frutas.",
    stock: 61,
  },
  {
    title: "Buzo",
    category: "buzos",
    size: ["XS", "S", "M"],
    color: [
      { colorName: "Verde", colorValue: "#6BFF33" },
      { colorName: "Rojo", colorValue: "#F20505" },
      { colorName: "Celeste", colorValue: "#05F2EB" },
    ],
    price: 44,
    picture: {
      mobile: "",
      tablet: "",
      desktop:
        "https://media.istockphoto.com/id/1317905567/es/foto/maqueta-de-sudadera-con-capucha-de-lana-con-cremallera-en-la-vista-frontal.webp?s=612x612&w=is&k=20&c=64jaS3PGBLvBGwHAHW5qLxHky8YY8CTxUpMQ4BPkzfw=",
    },
    description: "Buzos para el invierno, perfectos para el frio de la noche.",
    stock: 56,
  },
  {
    title: "Zapatillas",
    category: "otros",
    size: ["XS", "S", "M"],
    color: [
      { colorName: "Verde", colorValue: "#6BFF33" },
      { colorName: "Rojo", colorValue: "#F20505" },
      { colorName: "Celeste", colorValue: "#05F2EB" },
    ],
    price: 55,
    picture: {
      mobile: "",
      tablet: "",
      desktop:
        "https://media.istockphoto.com/id/1366255386/es/vector/zapatillas-medias.webp?s=612x612&w=is&k=20&c=qz_XsdKjbAxVmpl9ogP-No23DpEJOGI7pZRXx76ZZ8Y=",
    },
    description: "Eeeeeeee altas llantas loco.",
    stock: 24,
  },
  {
    title: "Bufanda",
    category: "otros",
    size: ["XS", "S", "M"],
    color: [
      { colorName: "Verde", colorValue: "#6BFF33" },
      { colorName: "Rojo", colorValue: "#F20505" },
      { colorName: "Celeste", colorValue: "#05F2EB" },
    ],
    price: 66,
    picture: {
      mobile: "",
      tablet: "",
      desktop:
        "https://media.istockphoto.com/id/637237414/es/foto/bufanda-a-rayas-blancas-gris-lana-sobre-blanco.webp?s=612x612&w=is&k=20&c=A_PWcDADZNTiH3JJWpp8mM0SJN2v2Jt-cArUOgZX95k=",
    },
    description: "Bufanda para el invierno, no hay mucho mas para decir, tampoco la gilada con las decripciones.",
    stock: 45,
  },
  {
    title: "Guantes de cuero",
    category: "otros",
    size: ["XS", "S", "M"],
    color: [
      { colorName: "Verde", colorValue: "#6BFF33" },
      { colorName: "Rojo", colorValue: "#F20505" },
      { colorName: "Celeste", colorValue: "#05F2EB" },
    ],
    price: 77,
    picture: {
      mobile: "",
      tablet: "",
      desktop:
        "https://media.istockphoto.com/id/656204400/es/foto/guantes-de-cuero-negro.webp?s=612x612&w=is&k=20&c=2aDvHQIcgJLChn03nzp5Q-WQ74XFBzsvOsYsBtIXgDQ=",
    },
    description: "Guantes de cuero para retar al otro a un duelo, cuando a tu mujer se le queja de como dejo el suelo.",
    stock: 85,
  },
  {
    title: "Cinturon",
    category: "otros",
    size: ["XS", "S", "M"],
    color: [
      { colorName: "Verde", colorValue: "#6BFF33" },
      { colorName: "Rojo", colorValue: "#F20505" },
      { colorName: "Celeste", colorValue: "#05F2EB" },
    ],
    price: 88,
    picture: {
      mobile: "",
      tablet: "",
      desktop:
        "https://media.istockphoto.com/id/1320317354/es/foto/cintur%C3%B3n-vaquero-de-cuero-sobre-fondo-de-madera.webp?s=612x612&w=is&k=20&c=O00u8b-xmersX6NQjs1Gs0wi2gZP6worJb_3uolNRc4=",
    },
    description: "Principal arma paternal letal al lado de la chancleta.",
    stock: 45,
  },
];

export const mainSlider = [
  {
    title: "Slider 1",
    image:
      "https://media.istockphoto.com/id/1317905567/es/foto/maqueta-de-sudadera-con-capucha-de-lana-con-cremallera-en-la-vista-frontal.webp?s=612x612&w=is&k=20&c=64jaS3PGBLvBGwHAHW5qLxHky8YY8CTxUpMQ4BPkzfw=",
  },
  {
    title: "Slider 2",
    image:
      "https://media.istockphoto.com/id/1366255386/es/vector/zapatillas-medias.webp?s=612x612&w=is&k=20&c=qz_XsdKjbAxVmpl9ogP-No23DpEJOGI7pZRXx76ZZ8Y=",
  },
  {
    title: "Slider 3",
    image:
      "https://media.istockphoto.com/id/1317905567/es/foto/maqueta-de-sudadera-con-capucha-de-lana-con-cremallera-en-la-vista-frontal.webp?s=612x612&w=is&k=20&c=64jaS3PGBLvBGwHAHW5qLxHky8YY8CTxUpMQ4BPkzfw=",
  },
];

export const getProduct = (title) => {
  const searchedProd = productData.find((prod) => prod.title === title);
  return searchedProd;
};

export const number = "+54 1178974932";

export default productData;
