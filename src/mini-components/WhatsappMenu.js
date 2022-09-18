import React from "react";
import UseWhatsapp from "whatsapp-react-component";
import { number } from "../data/productData";

const WhatsappMenu = ({ clsname, txt }) => {
  const message = "Hola Brenda! Tengo una duda sobre la página.";

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
