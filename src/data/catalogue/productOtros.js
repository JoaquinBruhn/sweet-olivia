const otros = [
  {
    title: "Medias",
    category: "Otros",
    size: ["M", "L", "XL"],
    color: [
      { colorName: "rosa", colorValue: "#FA67FF" },
      { colorName: "Rojo", colorValue: "#F20505" },
      { colorName: "Celeste", colorValue: "#05F2EB" },
    ],
    price: 33,
    picture: [
      "https://media.istockphoto.com/id/1194335315/es/foto/calcetines-de-invierno-acogedores-y-c%C3%A1lidos-aislados-sobre-fondo-blanco.webp?s=612x612&w=is&k=20&c=DMrSlJcDHhxsL07LPZFFYVLfLdWL6CQHOE4JfOOwTnI=",
      "https://media.istockphoto.com/id/1194335315/es/foto/calcetines-de-invierno-acogedores-y-c%C3%A1lidos-aislados-sobre-fondo-blanco.webp?s=612x612&w=is&k=20&c=DMrSlJcDHhxsL07LPZFFYVLfLdWL6CQHOE4JfOOwTnI=",
      "https://media.istockphoto.com/id/1194335315/es/foto/calcetines-de-invierno-acogedores-y-c%C3%A1lidos-aislados-sobre-fondo-blanco.webp?s=612x612&w=is&k=20&c=DMrSlJcDHhxsL07LPZFFYVLfLdWL6CQHOE4JfOOwTnI=",
    ],
    description: "Medias naranjas, pero las de lana no las frutas.",
    stock: 61,
  },
  {
    title: "Zapatillas",
    category: "Otros",
    size: ["XS", "S", "M"],
    color: [
      { colorName: "Verde", colorValue: "#6BFF33" },
      { colorName: "Rojo", colorValue: "#F20505" },
      { colorName: "Celeste", colorValue: "#05F2EB" },
    ],
    price: 55,
    picture: [
      "https://media.istockphoto.com/id/1366255386/es/vector/zapatillas-medias.webp?s=612x612&w=is&k=20&c=qz_XsdKjbAxVmpl9ogP-No23DpEJOGI7pZRXx76ZZ8Y=",
      "https://media.istockphoto.com/id/1366255386/es/vector/zapatillas-medias.webp?s=612x612&w=is&k=20&c=qz_XsdKjbAxVmpl9ogP-No23DpEJOGI7pZRXx76ZZ8Y=",
      "https://media.istockphoto.com/id/1366255386/es/vector/zapatillas-medias.webp?s=612x612&w=is&k=20&c=qz_XsdKjbAxVmpl9ogP-No23DpEJOGI7pZRXx76ZZ8Y=",
    ],
    description: "Eeeeeeee altas llantas loco.",
    stock: 24,
  },
  {
    title: "Bufanda",
    category: "Otros",
    size: ["XS", "S", "M"],
    color: [
      { colorName: "Verde", colorValue: "#6BFF33" },
      { colorName: "Rojo", colorValue: "#F20505" },
      { colorName: "Celeste", colorValue: "#05F2EB" },
    ],
    price: 66,
    picture: [
      "https://media.istockphoto.com/id/637237414/es/foto/bufanda-a-rayas-blancas-gris-lana-sobre-blanco.webp?s=612x612&w=is&k=20&c=A_PWcDADZNTiH3JJWpp8mM0SJN2v2Jt-cArUOgZX95k=",
      "https://media.istockphoto.com/id/637237414/es/foto/bufanda-a-rayas-blancas-gris-lana-sobre-blanco.webp?s=612x612&w=is&k=20&c=A_PWcDADZNTiH3JJWpp8mM0SJN2v2Jt-cArUOgZX95k=",
      "https://media.istockphoto.com/id/637237414/es/foto/bufanda-a-rayas-blancas-gris-lana-sobre-blanco.webp?s=612x612&w=is&k=20&c=A_PWcDADZNTiH3JJWpp8mM0SJN2v2Jt-cArUOgZX95k=",
    ],
    description: "Bufanda para el invierno, no hay mucho mas para decir, tampoco la gilada con las decripciones.",
    stock: 45,
  },
  {
    title: "Guantes de cuero",
    category: "Otros",
    size: ["XS", "S", "M"],
    discount: false,
    color: [
      { colorName: "Verde", colorValue: "#6BFF33" },
      { colorName: "Rojo", colorValue: "#F20505" },
      { colorName: "Celeste", colorValue: "#05F2EB" },
    ],
    price: 77,
    picture: [
      "https://media.istockphoto.com/id/656204400/es/foto/guantes-de-cuero-negro.webp?s=612x612&w=is&k=20&c=2aDvHQIcgJLChn03nzp5Q-WQ74XFBzsvOsYsBtIXgDQ=",
      "https://media.istockphoto.com/id/656204400/es/foto/guantes-de-cuero-negro.webp?s=612x612&w=is&k=20&c=2aDvHQIcgJLChn03nzp5Q-WQ74XFBzsvOsYsBtIXgDQ=",
      "https://media.istockphoto.com/id/656204400/es/foto/guantes-de-cuero-negro.webp?s=612x612&w=is&k=20&c=2aDvHQIcgJLChn03nzp5Q-WQ74XFBzsvOsYsBtIXgDQ=",
    ],
    description: "Guantes de cuero para retar al otro a un duelo, cuando a tu mujer se le queja de como dejo el suelo.",
    stock: 85,
  },
  {
    title: "Cinturon",
    category: "Otros",
    size: ["XS", "S", "M"],
    color: [
      { colorName: "Verde", colorValue: "#6BFF33" },
      { colorName: "Rojo", colorValue: "#F20505" },
      { colorName: "Celeste", colorValue: "#05F2EB" },
    ],
    price: 88,
    picture: [
      "https://media.istockphoto.com/id/1320317354/es/foto/cintur%C3%B3n-vaquero-de-cuero-sobre-fondo-de-madera.webp?s=612x612&w=is&k=20&c=O00u8b-xmersX6NQjs1Gs0wi2gZP6worJb_3uolNRc4=",
      "https://media.istockphoto.com/id/1320317354/es/foto/cintur%C3%B3n-vaquero-de-cuero-sobre-fondo-de-madera.webp?s=612x612&w=is&k=20&c=O00u8b-xmersX6NQjs1Gs0wi2gZP6worJb_3uolNRc4=",
      "https://media.istockphoto.com/id/1320317354/es/foto/cintur%C3%B3n-vaquero-de-cuero-sobre-fondo-de-madera.webp?s=612x612&w=is&k=20&c=O00u8b-xmersX6NQjs1Gs0wi2gZP6worJb_3uolNRc4=",
    ],
    description: "Principal arma paternal letal al lado de la chancleta.",
    stock: 45,
  },
];
export default otros;
