import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

import "./navigation.css";

const Navigation = () => {
  return (
    <div className="header">
      <div className="siteTitle">
        <h1>Olivia</h1>
      </div>
      <Navbar className="mainNav d-flex">
        <NavLink to="/" className={({ isActive }) => (isActive ? "selected-navlink navlink" : "navlink")}>
          Home
        </NavLink>
        <NavLink to="/catalogo" className={({ isActive }) => (isActive ? "selected-navlink navlink" : "navlink")}>
          Catálogo
        </NavLink>
        <NavLink to="/catalogo" className={({ isActive }) => (isActive ? "selected-navlink navlink" : "navlink")}>
          Whatsapp
        </NavLink>
        <NavLink to="/catalogo" className={({ isActive }) => (isActive ? "selected-navlink navlink" : "navlink")}>
          Instagram
        </NavLink>
      </Navbar>
    </div>
  );
};

export default Navigation;
