import React, { useState } from "react";
import { Col, Navbar, Nav } from "react-bootstrap";
import { AboutPage } from "../pages/about";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

export const Layout = (props: { children: React.ReactNode }) => {
  const [show, setShow] = useState(false);

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  return (
    <div>
      <Navbar expand="lg">
        <Col>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link className="nav-link" to="/majors">
                Majors
              </Link>
              <Link className="nav-link" to="/problems">
                Problems
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
        <Col>
          <Link className="nav-link navbar-brand" to="/">
            PATHWAYS
          </Link>
        </Col>
        <Col>
          <Nav.Link className="about-nav" onClick={handleShow}>
            About
          </Nav.Link>
          <AboutPage show={show} handleClose={handleClose} />
        </Col>
      </Navbar>
      {props.children}
      <footer>
        <div>Cellular Agriculture Australia 2020</div>
      </footer>
    </div>
  );
};
