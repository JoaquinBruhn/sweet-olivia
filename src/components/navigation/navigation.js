import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import WhatsappMenu from "../../mini-components/WhatsappMenu";
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
        <WhatsappMenu clsname={"navlink"} txt={"Whatsapp"} />
        <a href="https://www.instagram.com/sweetolivia.ok" className="navlink" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </Navbar>
    </div>
  );
};

export default Navigation;
