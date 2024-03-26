import React, { useEffect, useState } from "react";
import email from "../../assets/icon/baseline_mail_outline_black_24dp.png";
import back from "../../assets/icon/back.png";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Navbar,
  Row,
  Alert,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import useApi from "../../helpers/useApi";
import { useSelector } from "react-redux";
// import { login } from "../../store/reducer/user";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

//? untuk styling ngambil dari classname punya register gaes

function ForgetPassword() {
  const { isAuth } = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const api = useApi();
  const navigate = useNavigate();
  const [User, setUser] = useState({
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onChangeInput = (event) => {
    event.preventDefault();
    const data = { ...User };
    data[event.target.name] = event.target.value;
    setUser(data);
  };

  const sendEmail = () => {
    api
      .requests({
        method: "POST",
        url: "/auth/forget-password",
        data: User,
      })
      .then((res) => {
        const { data } = res.data;
        setSuccessMessage(data)
      })
      .catch((err) => {
        const errorMessage = err.response.data.description;
        setErrorMessage(errorMessage);
      });
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);
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

            <h1>Forget password, dont worry!</h1>
            <p className="sign-fontclr">
              We are programmer, so just tell us your email
            </p>

            <InputGroup className="mb-3">
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
            </div>
            <br />
            <br />
            <br />
            <div>
              <p className="login-crtacc">
                Not Registerd yet ? <a href="/register">Create an Account</a>{" "}
              </p>
            </div>
          </Col>
          <Col>
            <Container>
              <Player
                autoplay
                loop
                src="https://lottie.host/44615029-f7a3-43d7-a0e5-2453a4c1c734/Z0zGUD2LTR.json"
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

export default ForgetPassword;
