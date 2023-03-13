import React, { useEffect, useState } from "react";
import AOS from "aos";
import pict from "../../assets/image/login.png";
import email from "../../assets/icon/baseline_mail_outline_black_24dp.png";
import passpict from "../../assets/icon/baseline_vpn_key_black_24dp.png";
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
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/reducer/user";

//? untuk styling ngambil dari classname punya register gaes

function Login() {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const api = useApi();
  const navigate = useNavigate();
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const onChangeInput = (event) => {
    event.preventDefault();
    const data = { ...User };
    data[event.target.name] = event.target.value;
    setUser(data);
  };

  const doLogin = () => {
    api
      .requests({
        method: "POST",
        url: "/auth/login",
        data: User,
      })
      .then((res) => {
        const { data } = res.data;
        dispatch(login(data.token));
      })
      .catch((err) => {
        const errorMessage = err.response.data.description;
        setErrorMessage(errorMessage);
      });
  };

  useEffect(() => {
    AOS.init();
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
              <Container data-aos="fade-down"
              data-aos-delay="600"
              data-aos-duration="1000">
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

            <h1
              data-aos="fade-down"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              Welcome Back!
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="sign-fontclr"
            >
              Steps to get started, find the best stuff.
            </p>

            <InputGroup
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="mb-3"
            >
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
            <InputGroup
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1000"
              className="mb-3"
            >
              <InputGroup.Text id="basic-addon1">
                {" "}
                <img src={passpict} alt="username"></img>
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                onChange={onChangeInput}
                name="password"
              />
            </InputGroup>
            <p
              data-aos="fade-right"
              data-aos-delay="800"
              data-aos-duration="1000"
              className="sign-fontclr"
            >
              <a href="/forget-password">Forgot Password ?</a>
            </p>
            <div className="sign-btn">
              <Button
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                onClick={doLogin}
                variant="primary"
              >
                Login
              </Button>{" "}
            </div>
            <div>
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            </div>
            <br />
            <br />
            <br />
            <div>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="login-crtacc"
              >
                Not Registerd yet ? <a href="/register">Create an Account</a>{" "}
              </p>
            </div>
          </Col>
          <Col>
            <Container
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <img className="hm-bg" src={pict} alt="woman-pict"></img>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
