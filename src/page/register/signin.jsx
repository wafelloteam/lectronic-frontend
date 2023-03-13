import React, { useState, useEffect } from "react";
import "./signin.css";
import AOS from 'aos'
import pict from "../../assets/image/Sign in.png";
import userpict from "../../assets/icon/baseline_person_outline_black_24dp.png";
import passpict from "../../assets/icon/baseline_vpn_key_black_24dp.png";
import emailpict from "../../assets/icon/baseline_mail_outline_black_24dp.png";
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

const Register = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [User, setUser] = useState({
    full_name: "",
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

  const register = () => {
    api
      .requests({
        method: "POST",
        url: "/auth/register",
        data: User,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        const errorMessage = err.response.data.description;
        setErrorMessage(errorMessage);
      });
  };

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div>
      <Container className="sign-contr">
        <Row>
          <Col className="sign-col">
            <Navbar>
              <Container>
                <Navbar.Brand data-aos="fade-down"
                data-aos-delay="600"
                data-aos-duration="1000" href="/">
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

            <h1 data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1000">Welcome, Please</h1>
            <h1 data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="1000">Create an Account</h1>
            <p data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="1000" className="sign-fontclr">
              Please fill in your name, email and password
            </p>

            <InputGroup data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000" className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <img src={userpict} alt="username"></img>
              </InputGroup.Text>
              <Form.Control
                placeholder="Full Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={onChangeInput}
                name="full_name"
              />
            </InputGroup>
            <InputGroup data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000" className="mb-3">
              <InputGroup.Text id="basic-addon1">
                {" "}
                <img src={emailpict} alt="username"></img>
              </InputGroup.Text>
              <Form.Control
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                onChange={onChangeInput}
                name="email"
              />
            </InputGroup>
            <InputGroup data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1000" className="mb-3">
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
            <div className="sign-btn">
              <Button data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000" variant="primary" onClick={register}>
                Register
              </Button>{" "}
            </div>
            {/* Error message */}
            <div>
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            </div>
          </Col>
          <Col>
            <Container>
              <img data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1200" className="hm-bg" src={pict} alt="woman-pict"></img>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
