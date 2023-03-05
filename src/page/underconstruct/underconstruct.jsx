import React from "react";
import "./underconstruct.css";
import ImagesCr from "../../assets/image/underconstruction.jpeg";
import NavigationBar from "../../components/navbar/navbar";
import { Col, Container, Row } from "react-bootstrap";

function Underconstruct() {
  return (
    <div>
      <NavigationBar />
      <br />
      <div className="margin">
        <Container>
          <Row className="justify-content-md-center">
            <Col></Col>
            <Col>
              <img src={ImagesCr} alt="underconstruct" height="312px" />
            </Col>
            <Col></Col>
          </Row>
          <Row className="justify-content-md-center">
            <center>
              <h1>Comming Soon !</h1>
            </center>
            <center>
              <h3>Our Website is Underconstruction</h3>
            </center>
          </Row>
          <hr />
        </Container>
      </div>
    </div>
  );
}

export default Underconstruct;
