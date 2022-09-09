import React from "react";
import UseWhatsapp from "whatsapp-react-component";
import { number } from "../data/productData";

const WhatsappMenu = ({ clsname, txt }) => {
  const message = "Buenas Brenda tengo algunas preguntas de la pagina.";

  const sendMessage = () => {
    UseWhatsapp(number, message);
  };

  return (
    <>
      <p className={clsname} onClick={sendMessage}>
        {txt}
      </p>
    </>
  );
};
export default WhatsappMenu;
