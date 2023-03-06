import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import iconbar from "../../assets/icon/Logo.png";
import Profile from "../profile/profile";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/reducer/user";
import useApi from "../../helpers/useApi";

function NavigationBar() {
  const [profile, setProfile] = useState([])
  const { isAuth} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const api = useApi();

  const getUser = async () => {
    try {
      const { data } = await api.requests({
        method: "GET",
        url: "/user/id",
      });
      console.log(data);
      setProfile(data)
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
                <Nav.Link href="/detail">Community</Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="/about">About</Nav.Link>
              </Col>
            </Row>

            {!isAuth ? (
              <div>
                <Button
                  className="hm-clr-btn"
                  href="/login"
                  variant="primary"
                  size="large"
                >
                  Login
                </Button>{" "}
                <Button
                  className="hm-clr-btn"
                  href="/register"
                  variant="primary"
                  size="large"
                >
                  Sign Up
                </Button>{" "}
              </div>
            ) : (
              <div>
                {profile.map((v) => {
                  return(
                    <Profile
                      id={v.id}
                      image={v.image}
                      name={v.full_name}
                    />
                  )
                })}
                
              </div>
            )}
          </Container>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
