import React, { useEffect } from "react";
import "./navbar.css";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import iconbar from "../../assets/icon/Logo.png";

import { useDispatch, useSelector } from "react-redux";
import { logout, setData } from "../../store/reducer/user";
import useApi from "../../helpers/useApi";

function NavigationBar() {
  const { isAuth, data } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const api = useApi();

  const getUser = async () => {
    try {
      const { data } = await api.requests({
        method: "GET",
        url: "/user/id",
      });
      console.log(data)
      dispatch(setData(data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuth) {
      getUser();
    }
  }, [isAuth]);

  const doLogout = () => {
    dispatch(logout(data.token));
  };

  const full_name = data.full_name || "default";

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

            {!isAuth ? (
              <div>
                <Button href="/login" variant="primary" size="large">
                  Login
                </Button>{" "}
                <Button href="/register" variant="primary" size="large">
                  Sign Up
                </Button>{" "}
              </div>
            ) : (
              <div>
                <Button href="/login" variant="primary" size="large">
                  Welcome {full_name}
                </Button>{" "}
                <Button
                  onClick={doLogout}
                  variant="primary"
                  size="large"
                >
                  Logout
                </Button>{" "}
              </div>
            )}
          </Container>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
