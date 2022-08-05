import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <h1>TITULO</h1>
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
        <NavLink to="/comoComprar">Como comprar</NavLink>
        <NavLink to="/catalogo">Catalogo</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
