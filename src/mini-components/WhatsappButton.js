import React from "react";
import ReactWhatsapp from "react-whatsapp";
import { number } from "../data/productData";

const WhatsappButton = ({ title, size, color }) => {
  const message = `Hola Brenda estoy Interesadx en el producto ${title} con el talle ${size} de color ${color}.`;

  return (
    <>
      <ReactWhatsapp className="btnWsp" number={number} message={message}>
        Comprar
      </ReactWhatsapp>
    </>
  );
};
export default WhatsappButton;
