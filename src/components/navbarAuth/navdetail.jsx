import React from "react";
import "./navbarauth.css";
import back from "../../assets/icon/back.png";
import Profile from "../profile/profile";
import { Container, Navbar } from "react-bootstrap";

function NavbarAuth() {
  return (
    <>
      <Navbar className="nav-auth-margin">
        <Container>
          <Navbar.Brand href="/product">
            {" "}
            <img className="nav-img-size" src={back} alt="tombol-back" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Profile />
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarAuth;
