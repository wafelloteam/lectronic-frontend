import React from "react";
import { Col } from "react-bootstrap";
import "./cartList.css";
import CheckBox from "../checkbox/checkBox";
import CurrencyFormat from "react-currency-format";

function CartList(props) {
  return (
    <>
      <Col id="cart-list">
        <CheckBox />
        <div className="cart-image">
          <img className="carts" src={props.image} alt="" />
        </div>
        <div className="cart-text">
          <div className="prod-name">{props.name}</div>
          <div className="category-btn">{props.category}</div>
          <div className="prod-price">
            <CurrencyFormat
              value={props.price}
              displayType={"text"}
              thousandSeparator={"."}
              decimalSeparator={","}
              prefix={"Rp"}
            />
          </div>
          <div className="prod-price">{props.qty}</div>
        </div>
      </Col>
    </>
  );
}

export default CartList;
