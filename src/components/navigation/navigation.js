import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./navigation.css";

const Navigation = () => {

  return (
    <div className="header ">
      <h1>TITULO</h1>
      
      <Navbar className="mainNav d-flex">
            <NavLink to="/" className={({ isActive }) => isActive ? 'selected-navlink navlink' : 'navlink'}>
              Home
            </NavLink>

            <NavLink to="/nosotros" className={({ isActive }) => isActive ? 'selected-navlink navlink' : 'navlink'}>
              Nosotros
            </NavLink>

            <NavLink to="/comoComprar" className={({ isActive }) => isActive ? 'selected-navlink navlink' : 'navlink'}>
              Como comprar
            </NavLink>
            
            <NavLink to="/catalogo" className={({ isActive }) => isActive ? 'selected-navlink navlink' : 'navlink'}>
              Catálogo
            </NavLink>
      </Navbar>
    </div>
  );
};

export default Navigation;
