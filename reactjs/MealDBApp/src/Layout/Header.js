import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import {GiHamburger} from 'react-icons/gi'

function Header() {
  return (
    <Navbar expand="lg" className="main-navbar">
      <Container>
        <Navbar.Brand href="#home" className="main-brand">
        <GiHamburger className="me-2 display-6"/>
        <span className="underScore">_</span>NomDB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header