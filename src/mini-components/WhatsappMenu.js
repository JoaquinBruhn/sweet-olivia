import React from "react";
import ReactWhatsapp from "react-whatsapp";
import { number } from "../data/productData";

const WhatsappMenu = ({ clsname, txt }) => {
  const message = "Hola Brenda! Tengo una duda sobre la página.";

  return (
    <>
      <ReactWhatsapp className={clsname} number={number} message={message}>
        {txt}
      </ReactWhatsapp>
    </>
  );
};
export default WhatsappMenu;
