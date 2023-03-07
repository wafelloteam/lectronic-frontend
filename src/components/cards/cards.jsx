import React from "react";
import "./cards.css";
import { Button, Card, Col, Container } from "react-bootstrap";
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom'

function Cards(props) {
  return (
    <Col className="col-md-4">
      <Card className="m-5 card-rad" style={{ width: "18rem" }}>
        <div className="m-3 contaner">
          <Card.Text className="card-txt1">{props.name}</Card.Text>
          <Card.Text className="card-txt2">
          <CurrencyFormat
              value={props.price}
              displayType={"text"}
              thousandSeparator={"."}
              decimalSeparator={","}
              prefix={"Rp"}
            />
          </Card.Text>
        </div>
        <Container className="d-flex justify-content-center">
          <Card.Img className="card-img-prop" variant="top" src={props.image} />
        </Container>
        <Card.Body>
          <div className="card-btn">
          <Link to={`/detail/${props.slug}`}><Button className="crd-btn-clr">Detail</Button>{" "}</Link>
            <Button variant="outline-primary">Add to Cart</Button>{" "}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
