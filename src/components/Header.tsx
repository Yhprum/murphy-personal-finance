"use client";
import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="md" className="mb-3">
      <Container>
        <Navbar.Brand>Murphy Personal Finance</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/resources">
              Resources
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
