import React from "react";
import './detail.css'
import NavbarAuth from "../../components/navbarAuth/navbarauth";
import picture from "../../assets/image/AIAIAI-TMA-1.jpg";
import { Button, Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";

function Detail() {
  return (
    <>
      <div>
        <NavbarAuth />
        <Container>
          <Row>
            <Col>
              <Container>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={picture} />
                  </Card>
                </div>
                <br />
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Row>
                      <Card.Title className="detail-card2-line1" >Details</Card.Title>
                      </Row>
                      <Row>
                      <Card.Title className="detail-card2-line2" >Stock 5</Card.Title>
                      </Row>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Row>
                        <Col>
                      <Button variant="primary">Check Out</Button>
                        </Col>
                        <Col>
                      <Button variant="primary">Add to Cart</Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              </Container>
            </Col>
            <Col>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="Details" title="Details">
                  <h2>testing</h2>
                </Tab>
                <Tab eventKey="Review" title="Review">
                <h2>testing tab2</h2>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Detail;
