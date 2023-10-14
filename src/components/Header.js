import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles//Header.css";

const Header = ( ) => {
  
  return (
    <div className="nav_bar">
      <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-left">
        MoneyMentor
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#home" className="px-3 fs-5">Home</Nav.Link>
            <Nav.Link className="px-3 fs-5">About</Nav.Link>
            <Nav.Link className="px-3 fs-5">E-Learning</Nav.Link>
            <Nav.Link className="px-3 fs-5">Quizzes</Nav.Link>
            <Nav.Link className="px-3 fs-5">Stock Marketing</Nav.Link>
            <Nav.Link className="px-3 fs-5">News</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;