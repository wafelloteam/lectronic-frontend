import { React, useState } from "react";
import "./cards.css";
import { Button, Card, Col, Container } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
import useApi from "../../helpers/useApi";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cards(props) {
  const { isAuth } = useSelector((state) => state.user);
  const api = useApi();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function checkoutItem() {
    try {
      const response = await api.requests({
        method: "POST",
        url: `/cart/add/${props.id}`,
        data: { qty: 1 },
      });
      console.log(response);
      setSuccessMessage(
        <span>
          {props.name} has been added to your cart. Check{" "}
          <a href="/cart">cart</a> here.
        </span>
      );
    } catch (error) {
      console.log(error);
    }
  }

  function checkoutNot() {
    setErrorMessage(
      <p>Please <a href="/login">login</a> first.</p>
    );
  }
  return (
    <Col className="col-md-4">
      <Card className="m-5 card-rad" style={{ width: "18rem" }}>
        <div className="m-3 contaner">
          <Card.Text className="card-txt1">
            <p style={{ textTransform: "capitalize" }}>{props.category}</p>{" "}
            {props.name}
          </Card.Text>
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
            <Button href={`/detail/${props.slug}`} className="crd-btn-clr">
              Detail
            </Button>

            {!isAuth ? (
              <Button variant="outline-primary" onClick={checkoutNot}>
                Add to Cart
              </Button>
            ) : (
              <Button variant="outline-primary" onClick={checkoutItem}>
                Add to Cart
              </Button>
            )}

            {successMessage && (
              <Alert variant="success">{successMessage}</Alert>
            )}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
