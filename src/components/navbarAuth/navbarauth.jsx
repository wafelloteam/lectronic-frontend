import {React, useEffect} from "react";
import "./navbarauth.css";
import { useNavigate } from "react-router-dom";
import back from "../../assets/icon/back.png";
import { Button, Container, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../assets/icon/Logo.png";
import user from "../../assets/image/edward-photo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, setData } from "../../store/reducer/user";
import useApi from "../../helpers/useApi";

function NavbarAuth() {
  const kembali = useNavigate()
  const { isAuth, data } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const api = useApi();

  const getUser = async () => {
    try {
      const { data } = await api.requests({
        method: "GET",
        url: "/user/id",
      });
      console.log(data);
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
      <Navbar className="nav-auth-margin">
        <Container>
          <Navbar.Brand onClick={() => kembali(-1)} >
            {" "}
            <img  className="nav-img-size" src={back} alt="tombol-back" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle />

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
              <NavDropdown
                title={<img className="nav-img-size" src={logo} alt="logo-lectronic" />}
                drop="start"
              >
                <NavDropdown.Item className="nav-dropdown-user" href="#action/3.1">
                  <img className="imgNav" src={user} alt="user-img" />
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-dropdown-user" href="#action/3.1">
                   <p className="nav-tes-margin">{full_name}</p>
                   <span className="user-nav" >{data.email}</span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/admin">Dashboard</NavDropdown.Item>
                <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
                <NavDropdown.Item href="/" onClick={doLogout} >Log Out</NavDropdown.Item>
              </NavDropdown>
              </div>
            )}

        </Container>
      </Navbar>
    </>
  );
}

export default NavbarAuth;
