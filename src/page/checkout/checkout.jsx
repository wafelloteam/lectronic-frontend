import NavbarAuth from "../../components/navbarAuth/navbarauth";
import { Container, Row, Col } from "react-bootstrap";
import CartList from "../../components/cart/cartList/cartList";
import "./checkout.css";

function Checkout() {
  return (
    <div>
      <NavbarAuth />

      <Container>
        <Row className="cart-header" style={{ marginBottom: "40px" }}>
          Checkout
        </Row>
        <div className="row-flex">
          <div className="row-cart">
            <Row>
              <Col className="change-address">
                <div className="delivery">Delivery Address</div>
                <div className="address-box">
                  <div className="address-text">4517 Washington Ave. Manchester, Kentucky 39495</div>
                </div>
                <div className="change-btn">
                  <div className="adrr-btn">Change Address</div>
                </div>
              </Col>
            </Row>
            <Row>
              <CartList />
            </Row>
            <Row>
              <CartList />
            </Row>
          </div>
          <Row id="total-checkout" style={{height:"454px"}}>
            <div className="total">Total</div>
            <div className="item">
              <div className="left">
                <div>Item Price</div>
                <div>Discount</div>
              </div>
              <div className="price">
                <div>$0</div>
                <div>$6000</div>
              </div>
            </div>
            <hr />
            <div className="bill">
              <div>Bill</div>
              <div>$6000</div>
            </div>
            <div className="checkout-btn" style={{width:"100%"}}>
              <div className="text">Pay Bills</div>
            </div>
            <div style={{height:"16px"}}></div>
            <div className="change-btn" style={{width:"100%"}}>
              <div className="adrr-btn">Choose Payment Method</div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Checkout;
