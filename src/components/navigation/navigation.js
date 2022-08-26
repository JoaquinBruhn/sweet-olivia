import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./navigation.css";

const Navigation = () => {
  return (
    <div className="header ">
      <div className="siteTitle">
        <h1>TITULO</h1>
      </div>
      <Navbar className="mainNav d-flex" variant="dark" expand="md">
        <Navbar.Toggle style={{ margin: "5px" }} />
        <Navbar.Collapse variant="light">
          <Nav style={{ width: "100%" }}>
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
            <NavDropdown>
              <NavDropdown.Item>
                <NavLink to="/">Home</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <a href="#howToSite">Como comprar</a>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <a href="#aboutUs">Nosotros</a>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/catalogo">Catálogo</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Navbar className="mainNav d-flex">
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
      </Navbar> */}
    </div>
  );
};

export default Navigation;
