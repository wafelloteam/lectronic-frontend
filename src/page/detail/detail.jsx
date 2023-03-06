import { React, useState, useEffect } from "react";
import "./detail.css";
import AOS from "aos";
import "aos/dist/aos.css";
import cart from "../../assets/icon/shopping_cart.png";
import NavbarAuth from "../../components/navbarAuth/navdetail";
import picture from "../../assets/image/AIAIAI-TMA-1.jpg";
import Footer from "../../components/footer/footer";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";

function Detail() {
  const [detail, setDetail] = useState("detail");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div>
        <NavbarAuth />
        <Container>
          <Row>
            <Col>
              <Container>
                <div>
                  <Card
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="detail-card-prop"
                    style={{ width: "25rem", height: "30rem" }}
                  >
                    <Container className="d-flex">
                      <Card.Img src={picture} alt="img-detail" />
                    </Container>
                    <br />
                    <Container className="detail-container-imagekecil">
                      <Card
                        className="detil-image-kecil"
                        style={{ width: "5rem", height: "5rem" }}
                      >
                        <Container className="d-flex">
                          <Card.Img src={picture} alt="img-detail" />
                        </Container>
                      </Card>

                      <Card
                        className="detil-image-kecil"
                        style={{ width: "5rem", height: "5rem" }}
                      >
                        <Container className="d-flex">
                          <Card.Img src={picture} alt="img-detail" />
                        </Container>
                      </Card>

                      <Card
                        className="detil-image-kecil"
                        style={{ width: "5rem", height: "5rem" }}
                      >
                        <Container className="d-flex">
                          <Card.Img src={picture} alt="img-detail" />
                        </Container>
                      </Card>

                      <Card
                        className="detil-image-kecil"
                        style={{ width: "5rem", height: "5rem" }}
                      >
                        <Container className="d-flex">
                          <Card.Img src={picture} alt="img-detail" />
                        </Container>
                      </Card>
                    </Container>
                  </Card>
                </div>
                <br />
                <div>
                  <Card
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    data-aos-once="true"
                    className="detail-card-prop"
                    style={{ width: "25rem", height: "20rem" }}
                  >
                    <Card.Body>
                      <Row>
                        <Card.Title className="detail-card2-line1 detail-font-prop mt-3">
                          Details
                        </Card.Title>
                      </Row>
                      <Row>
                        <Card.Title className="detail-card2-line2 ">
                          Stock 5
                        </Card.Title>
                      </Row>
                      <Row>
                        <Card.Text className="detail-card2-lineii">
                          Add Notes
                        </Card.Text>
                      </Row>
                      <br />
                      <Row>
                        <Container className="detail-card2-line3">
                          <Card.Text className="detail-nunito">
                            Sub Total
                          </Card.Text>
                          <Card.Text className="detail-price">
                            {"Rp. "}30000{".00"}
                          </Card.Text>
                        </Container>
                      </Row>
                      <br />
                      <br />
                      <Row>
                        <Card.Body>
                          <div className="card-btn">
                            <Button className="btn-dtl detail-nunito">
                              Check Out
                            </Button>{" "}
                            <Button variant="outline-primary">
                              <img
                                className="prod-btn-size"
                                src={cart}
                                alt="box"
                              />
                            </Button>
                          </div>
                        </Card.Body>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              </Container>
            </Col>
            <Col>
              <Container className="dtl-width">
                <h1
                  className="detail-font-prop"
                  data-aos="fade-down"
                  data-aos-delay="200"
                  data-aos-duration="2000"
                >
                  Sony MDR-5407
                </h1>
                <br />
                <h5
                  className="detail-nunito"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="2000"
                >
                  Sold {"6"} {"|"} Rating: {"5"}
                </h5>
                <hr />
                <Container
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-duration="2000"
                >
                  <Tabs
                    activeKey={detail}
                    onSelect={(d) => {
                      setDetail(d);
                    }}
                    id="controlled-tab"
                    className="mb-3"
                  >
                    <Tab eventKey="detail" title="Details">
                      <p className="detail-nunito">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like).
                      </p>
                    </Tab>
                    <Tab
                      ddata-aos="fade-left"
                      data-aos-delay="400"
                      data-aos-duration="2000"
                      eventKey="Review"
                      title="Review"
                    >
                      <Card
                        className="card-inside-review"
                        style={{ width: "39rem" }}
                      >
                        <Card.Body>
                          <Container className="detail-review-prop mt-3">
                            <Card.Title className="detail-font-prop">
                              Sony MDR-5407
                            </Card.Title>
                            &nbsp; &nbsp;
                            <Card.Subtitle className="mb-1 detail-nunito">
                              1 item {"|"} {"Rp. "}30000{".00"}
                            </Card.Subtitle>
                          </Container>
                          <Container>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label></Form.Label>
                              <Form.Control
                                placeholder="Add your review ..."
                                as="textarea"
                                rows={3}
                              />
                            </Form.Group>
                          </Container>
                          <Container className="detail-review-btn">
                            <Button className="btn-dtl detail-nunito">
                              Submit
                            </Button>
                          </Container>
                        </Card.Body>
                      </Card>
                    </Tab>
                  </Tabs>
                </Container>
              </Container>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default Detail;
