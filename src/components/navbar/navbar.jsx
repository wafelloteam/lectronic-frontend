import React from "react";
import "./navbar.css";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import iconbar from "../../assets/icon/Logo.png";

function NavigationBar() {
  return (
    <>
      <Navbar className="nv-bg" variant="light">
        <Container>
          <Navbar.Brand href="/" className="nv-center">
            <div>
              <img
                src={iconbar}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              ></img>
              <text className="nv-txt">Lectronic</text>
            </div>
          </Navbar.Brand>
          <Container className="nv-center">
            <Row>
              <Col className="nv-margin-right">
                <Nav.Link href="/">Home</Nav.Link>
              </Col>
              <Col className="nv-margin-right">
                <Nav.Link href="/product">Product</Nav.Link>
              </Col>
              <Col className="nv-margin-right">
                <Nav.Link href="/underconstruct">Community</Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="/underconstruct">About</Nav.Link>
              </Col>
            </Row>
            <div>
              <Button href="/login" variant="primary" size="large">
                Login
              </Button>{" "}
              <Button href="/register" variant="primary" size="large">
                Sign Up
              </Button>{" "}
            </div>
          </Container>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
