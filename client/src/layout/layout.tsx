import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AboutPage } from "../pages/about";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

export const Layout = (props: any) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Nav.Link onClick={handleShow}>About</Nav.Link>
        <AboutPage show={show} handleClose={handleClose} />
      </Navbar>
      {props.children}
      <footer>
        <div>Cellular Agriculture Australia 2020</div>
      </footer>
    </div>
  );
};
