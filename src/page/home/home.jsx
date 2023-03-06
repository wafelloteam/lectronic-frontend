import { React, useState, useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Cards from "../../components/cards/cards";
import NavigationBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Search from "../../components/searchbar/search";
import Category from "../../components/navcategory/category";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import pict from "../../assets/image/woman.png";
import box from "../../assets/icon/box.png";
import coin from "../../assets/icon/coin.png";
import cart from "../../assets/icon/shopping_cart.png";
import useApi from "../../helpers/useApi";

function Home() {
  const api = useApi();
  const [best, setBest] = useState([]);

  const getBest = async () => {
    try {
      const { data } = await api.requests({
        method: "GET",
        url: "/product/all",
      });
      setBest(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBest();
    AOS.init();
  }, []);

  return (
    <>
      <div className="scroll-container">
        <div id="page1" className="hm-bg-div scroll-area">
          <NavigationBar />
          <Container className="algn-txt">
            <Row>
              <Col className="hm-ld-txt">
                <h1
                  data-aos="fade-right"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  className="hm-font-header"
                >
                  Take Your Time
                </h1>
                <h1
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  className="hm-font-header"
                >
                  And <span className="hm-shop-clr">Shop</span>
                </h1>
                <h1
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                  className="hm-font-header"
                >
                  Anywhere
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                  className="hm-font-desc"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit..
                </p>
                <div>
                  <Button
                    data-aos="fade-right"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                    variant="primary"
                  >
                    Shop Now
                  </Button>{" "}
                  <Button
                    data-aos="fade-left"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                    variant="outline-primary"
                  >
                    Be a Seller
                  </Button>{" "}
                </div>
              </Col>
              <Col>
                <Container data-aos="fade-up" data-aos-duration="2000">
                  <img className="hm-bg" src={pict} alt="woman-pict"></img>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>

        {/* batas page */}

        <div id="page2" className="scroll-area">
          <Container>
            <div data-aos="fade-up" data-aos-duration="2000">
              <Card
                className="hm-cr"
                bg={"light"}
                style={{ width: "147px", height: "52px" }}
              >
                <Card.Title className="hm-cr-title">How it Works</Card.Title>
              </Card>
              <div className="hm-title-display">
                <h1 className="hm-pg-title">Make An</h1>
                <h1 className="hm-pg-title">Order Easily</h1>
              </div>
            </div>

            <div className="hm-d-flk">
              <Row>
                <Col>
                  <Card
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1500"
                    className="hmCardStyle"
                    style={{ width: "18rem" }}
                  >
                    <div className="imgParent">
                      <img className="img" src={cart} alt="box" />
                    </div>
                    <Card.Title className="hm-card-title">
                      Select Product
                    </Card.Title>
                    <Card.Text className="hm-card-subtitle">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </Card.Text>
                  </Card>
                </Col>
                <Col>
                  <Card
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1500"
                    className="hmCardStyle"
                    style={{ width: "18rem" }}
                  >
                    <div className="imgParent">
                      <img className="img" src={coin} alt="box" />
                    </div>
                    <Card.Title className="hm-card-title">
                      Make Payment
                    </Card.Title>
                    <Card.Text className="hm-card-subtitle">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </Card.Text>
                  </Card>
                </Col>
                <Col>
                  <Card
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1500"
                    className="hmCardStyle"
                    style={{ width: "18rem" }}
                  >
                    <div className="imgParent">
                      <img className="img" src={box} alt="box" />
                    </div>
                    <Card.Title className="hm-card-title">
                      Receive Product
                    </Card.Title>
                    <Card.Text className="hm-card-subtitle">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        {/* batas page */}

        <div id="page3" className="scroll-area">
          <Container>
            <div data-aos="fade-up" data-aos-duration="2000">
              <Card
                className="hm-cr"
                bg={"light"}
                style={{ width: "147px", height: "52px" }}
              >
                <Card.Title className="hm-cr-title">Our Product</Card.Title>
              </Card>
              <div className="hm-title-display">
                <h1 className="hm-pg-title">The Best Product By</h1>
                <h1 className="hm-pg-title">Lectronic</h1>
              </div>
              <div>
                <div className="hm-pd-search">
                  <Row>
                    <Col>
                      <Category />
                    </Col>
                    <Col>
                      <Search />
                    </Col>
                  </Row>
                </div>

                <Row>
                  {best.map((v) => {
                    return (
                      <Cards
                        id={v.id}
                        name={v.name}
                        price={v.price}
                        image={v.image}
                      />
                    );
                  })}
                </Row>
              </div>
            </div>
          </Container>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
