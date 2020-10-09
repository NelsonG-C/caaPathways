import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

export const Layout = (props: any) => {
  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mr-auto">
          <Nav>
            <Nav.Link href="#home">Majors</Nav.Link>
            <Nav.Link>Problems</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="mx-auto">
          <h4>Pathways</h4>
        </Navbar.Brand>
        <Nav.Link>About</Nav.Link>
      </Navbar>
      <Container>{props.children}</Container>
      <footer>
        <div>Cellular Agriculture Australia 2020</div>
      </footer>
    </div>
  );
};
