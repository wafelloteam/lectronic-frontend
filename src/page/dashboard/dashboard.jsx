import React from "react";
import "./dashboard.css";
import NavbarAuth from "../../components/navbarAuth/navbarauth";
import store from "../../assets/image/store.png";
import toko from "../../assets/icon/Toko.png";
import botompict from "../../assets/image/dashboard-down.png";
import Footer from "../../components/footer/footer";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <div>
        <NavbarAuth />
        <Container>
        <div>
          <h1 className="ds-title">Dashboard</h1>
        </div>
          <Row className="ds-row-prop">
            <Col>
              <img
                style={{ width: "40rem" }}
                className="shadow-test"
                src={store}
                alt="store-gambar"
              />
            </Col>
            <Col>
              <Container>
                <Card
                  className="ds-card"
                  style={{ width: "30rem", height: "33.5rem" }}
                >
                  <Container className="ds-container">
                    <div className="ds-imgParent">
                      <img className="ds-img" src={toko} alt="box" />
                    </div>
                    <hr size="10px" width="80%"></hr>

                    <Button
                      href="/manage-product"
                      className="ds-clr-btn card-btn"
                    >
                      Manage Product
                    </Button>

                    <br />

                    <Button className="ds-clr-btn card-btn">
                      Checking Order
                    </Button>
                  </Container>
                </Card>
              </Container>
            </Col>
          </Row>
          <br />
          <Row>
            <img className="shadow-test" src={botompict} alt="" />
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
