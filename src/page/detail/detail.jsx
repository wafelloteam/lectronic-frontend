import { React, useState, useEffect } from "react";
import "./detail.css";
import AOS from "aos";
import "aos/dist/aos.css";
import cart from "../../assets/icon/shopping_cart.png";
import NavbarAuth from "../../components/navbarAuth/navdetail";
// import picture from "../../assets/image/AIAIAI-TMA-1.jpg";
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
import { useParams } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import useApi from "../../helpers/useApi";

function Detail() {
  const api = useApi();
  const [product, setProduct] = useState({});
  const [tabProduct, setTabProduct] = useState("detail");
  const params = useParams();

  async function getData() {
    try {
      const response = await api.requests({
        method: "GET",
        url: `/product/slug/${params.slug}`,
      });
      setProduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
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
                    <Container className="d-flex customstyle">
                      <Card.Img src={product.image} alt="img-detail" />
                    </Container>
                    <br />
                    <Container className="detail-container-imagekecil">
                      <Card
                        className="detil-image-kecil customstyle"
                        style={{ width: "5rem", height: "5rem" }}
                      >
                        <Container className="d-flex">
                          <Card.Img src={product.image} alt="img-detail" />
                        </Container>
                      </Card>

                      <Card
                        className="detil-image-kecil customstyle"
                        style={{ width: "5rem", height: "5rem" }}
                      >
                        <Container className="d-flex">
                          <Card.Img src={product.image} alt="img-detail" />
                        </Container>
                      </Card>

                      <Card
                        className="detil-image-kecil customstyle"
                        style={{ width: "5rem", height: "5rem" }}
                      >
                        <Container className="d-flex">
                          <Card.Img src={product.image} alt="img-detail" />
                        </Container>
                      </Card>

                      <Card
                        className="detil-image-kecil customstyle"
                        style={{ width: "5rem", height: "5rem" }}
                      >
                        <Container className="d-flex" >
                          <Card.Img src={product.image} alt="img-detail" />
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
                          Stock {product.stock}
                        </Card.Title>
                      </Row>
                      {/* <Row>
                        <Card.Text className="detail-card2-lineii">
                          Add Notes
                        </Card.Text>
                      </Row> */}
                      <br />
                      <Row>
                        <Container className="detail-card2-line3">
                          <Card.Text className="detail-nunito">
                            Sub Total
                          </Card.Text>
                          <Card.Text className="detail-price">
                            <CurrencyFormat
                              value={product.price}
                              displayType={"text"}
                              thousandSeparator={"."}
                              decimalSeparator={","}
                              prefix={"Rp"}
                            />
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
                  {product.name}
                </h1>
                <br />
                <h5
                  className="detail-nunito"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="2000"
                >
                  Sold {product.sold} {"|"} Rating: {product.rating}
                </h5>
                <hr />
                <Container
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-duration="2000"
                >
                  <Tabs
                    activeKey={tabProduct}
                    onSelect={(d) => {
                      setTabProduct(d);
                    }}
                    id="controlled-tab"
                    className="mb-3"
                  >
                    <Tab eventKey="detail" title="Details">
                      <p className="detail-nunito">
                      Sit cillum cillum laborum anim exercitation officia.Ipsum do ullamco deserunt velit elit.Ad commodo ex Lorem dolor amet et consequat cillum ipsum cillum non.Consectetur aute consectetur incididunt sint cillum qui nostrud officia nisi laborum.Eiusmod officia magna occaecat exercitation nisi esse quis ex culpa voluptate elit voluptate.Exercitation laborum ut esse ipsum aliqua elit consectetur aute duis.Aute nulla in voluptate pariatur qui eiusmod aliqua ut deserunt nisi proident aliqua consectetur.
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
                              {product.name}
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
