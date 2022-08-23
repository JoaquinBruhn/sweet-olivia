import React from 'react';
import UseWhatsapp from 'whatsapp-react-component'
import { number } from '../data/productData';


const Whatsapp  = ({title,size,color}) => {
  const message = `Hola Brenda estoy Interesadx en el producto ${title} con el talle ${size} de color ${color}.`
  
  const sendMessage = () => {
    UseWhatsapp(number, message)
  }

    return (
      <>
        <button className='btnWsp' onClick={sendMessage}>Comprar</button>
      </>
    );
}
export default Whatsapp;

