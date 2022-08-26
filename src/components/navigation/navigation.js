import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="header ">
      <div className="sitTitle">
        <h1>TITULO</h1>
      </div>

      <Navbar className="mainNav d-flex">
        <NavLink to="/" className={({ isActive }) => (isActive ? "selected-navlink navlink" : "navlink")}>
          Home
        </NavLink>
        <a href="#howToSite" className="navlink">
          Como comprar
        </a>
        <a href="#aboutUs" className="navlink">
          Nosotros
        </a>

        <NavLink to="/catalogo" className={({ isActive }) => (isActive ? "selected-navlink navlink" : "navlink")}>
          Catálogo
        </NavLink>
      </Navbar>
    </div>
  );
};

export default Navigation;
