import React, { useEffect, useState } from "react";
import back from "../../assets/icon/back.png";
import passpict from "../../assets/icon/baseline_vpn_key_black_24dp.png";
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
import { useParams } from "react-router-dom";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

//? untuk styling ngambil dari classname punya register gaes

function UpdatePassword() {
  const { isAuth } = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const params = useParams();
  const api = useApi();
  const navigate = useNavigate();
  const [User, setUser] = useState({
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onChangeInput = (event) => {
    event.preventDefault();
    const data = { ...User };
    data[event.target.name] = event.target.value;
    setUser(data);
  };

  const changePassword = () => {
    api
      .requests({
        method: "PUT",
        url: `/auth/update-password/${params.id}`,
        data: User,
      })
      .then((res) => {
        const { data } = res;
        console.log(data)
        setSuccessMessage(data.status)
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

            <h1>Update your password </h1>
            <p className="sign-fontclr">
            Next time, please remember your password
              
            </p>

            <InputGroup className="mb-3">
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
              <Button onClick={changePassword} variant="primary">
                Update password
              </Button>{" "}
            </div>
            <div>
              {successMessage && <Alert variant="success">{successMessage}: Password change successfully. Please login again <a href="/login"> here </a></Alert>}
            </div>
            <div>
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            </div>
            <br />
            <br />
            <br />
          </Col>
          <Col>
            <Container>
              <Player
                autoplay
                loop
                src="https://assets8.lottiefiles.com/packages/lf20_RQErLJr1kP.json"
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

export default UpdatePassword;
