import React, { useState } from 'react';
import "../components/styles/navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="color-nav" light expand="md">
        <NavbarBrand id="logo">Brandon Chontos</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="linkstyling" href="/">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="linkstyling" href="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="linkstyling" href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="two-toned-header-color"></div>
    </div>

  );
}

export default MyNavbar;
