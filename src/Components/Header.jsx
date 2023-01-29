import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import Scrollspy from "react-scrollspy";

function Header() {
  return (
    <Navbar className="header " collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="brand" href="#home">
          <img src="img/Logo Type.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto  ">
            <Scrollspy
              className="scrollspy"
              currentClassName={"current"}
              scrolledPastClassName={"scrolled"}
              items={["section-1", "section-2"]}
            >
              <Nav.Link className="navlink" href="#section-1">
                MY CARDS<div className="divideractive"></div>
              </Nav.Link>
              <Nav.Link className="navlink" href="#section-2">
                MARKET<div className="divideractive"></div>
              </Nav.Link>
            </Scrollspy>
          </Nav>
          <Nav>
            <Nav.Link className="navlink" eventKey={2} href="#budget">
              <Row className="salescard ">
                <Col className="imageback" xs={4}>
                  <img src="img/vole_wallet.png" className="pt-2" alt="cart" />
                </Col>
                <Col className="pt-2" xs={8}>
                  &#x20AC; 100
                </Col>
              </Row>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
