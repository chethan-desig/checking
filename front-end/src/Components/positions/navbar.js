import React from "react";
import { Link } from "react-router-dom";
import "./Acc.css";
import { Nav, Navbar, Container, Button, NavLink } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Navbaring = () => {
  return (
    <div>
      <div class="container"></div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>Gyansys |</Navbar.Brand>
          <Navbar.Brand>Hire Skills Tool</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#"></Nav.Link>
              <Nav.Link href="#"></Nav.Link>
            </Nav>
            <Nav>
              <Button className="btn btn-dark">
                <Link to="/candidate">
                  <BsPlusCircle />
                </Link>
              </Button>
              <Nav.Link className="mt-2 text-white">welcome sneha</Nav.Link>
              <Nav.Link eventKey={2} href="#">
                <Button className="btn btn-dark">
                  <FaUserCircle />
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbaring;
