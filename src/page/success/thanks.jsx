import React from "react";
import back from "../../assets/icon/back.png";
import {
  Col,
  Container,
  Navbar,
  Row,
} from "react-bootstrap";

import { useSelector } from "react-redux";
// import { login } from "../../store/reducer/user";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

//? untuk styling ngambil dari classname punya register gaes

function Thanks() {
  const {  data } = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const name = data.full_name


  return (
    <div>
      <Container className="login-margn">
        <Row>
          <Col className="sign-col">
            <Navbar>
              <Container>
                <Navbar.Brand href="/">
                  {" "}
                  <img
                    className="nav-img-size"
                    src={back}
                    alt="tombol-back"
                  />{" "}
                </Navbar.Brand>
              </Container>
            </Navbar>

            <br />
            <br />
            <br />

            <h1>Thank You {name}, your order is on the way</h1>
            <p className="sign-fontclr">
              Check your email
            </p>

            {/* <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                {" "}
                <img src={email} alt="username"></img>
              </InputGroup.Text>
              <Form.Control
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                onChange={onChangeInput}
                name="email"
              />
            </InputGroup>
            <div className="sign-btn">
              <Button onClick={sendEmail} variant="primary">
                Send reset email
              </Button>{" "}
            </div>
            <div>
              {successMessage && <Alert variant="success">{successMessage}</Alert>}
            </div>
            <div>
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            </div> */}
            <br />
            <br />
            <br />
            {/* <div>
              <p className="login-crtacc">
                Not Registerd yet ? <a href="/register">Create an Account</a>{" "}
              </p>
            </div> */}
          </Col>
          <Col>
            <Container>
              <Player
                autoplay
                loop
                src="https://assets8.lottiefiles.com/packages/lf20_ofuo42yn.json"
                style={{ height: "500px", width: "500px" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Thanks;
