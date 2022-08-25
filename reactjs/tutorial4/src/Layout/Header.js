import React from "react";
import { BrowserRouter, Router, Routes, Link, Route } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {AiFillTwitterSquare} from 'react-icons/fa'

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Blueberry</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className="nav-link text-decoration-none">
              Homepage
            </Link>
            <Link to={"/Contact"} className="nav-link text-decoration-none">
              Contact
            </Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <Link
                to={"/Movies/Adventure"}
                className="dropdown-item text-decoration-none"
              >
                Adventure
              </Link>{" "}
              {/*Links are just an example*/}
              <Link
                to={"/Movies/Horror"}
                className="dropdown-item text-decoration-none"
              >
                Horror
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
