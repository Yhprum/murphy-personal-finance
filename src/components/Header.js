import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {

  return (
    <Navbar bg="light" expand="md" className="mb-3">
      <Container>
        <Navbar.Brand href="/">KEM Investing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;