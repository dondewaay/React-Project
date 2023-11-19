import "./Header.css";
import Home from "../Home/Home";
import About from "../About/About";
import Button from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar navbar-dark bg-dark">
        <Container>
          <Navbar.Brand href="#home">BEAR WEBSITE!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">Bears</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link href="#home">Credits</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
