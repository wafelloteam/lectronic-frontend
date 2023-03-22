import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import angga from "../../assets/image/angga.jpeg";
import ardi from "../../assets/image/ardi.jpeg";
import rf from "../../assets/image/rf.jpg";
import NavigationBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

function About() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="about-bg">
        <NavigationBar />
        <br />
        <br />
        <Container>
          <div data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="2000"
                 className="hm-title-display">
            <h1 className="hm-pg-title">Meet Our Team !</h1>
          </div>

          <Row>
            <Col className="md-4">
              <Card
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
                className="about-card-style"
                style={{ width: "18rem" }}
              >
                <Container className="about-container">
                  <img className="about-img-parent" src={angga} alt="box" />
                  <Card.Title className="about-role-title">
                    Angga Ardhinata
                  </Card.Title>
                  <Card.Title className="about-card-title">
                    Front-End Developer
                  </Card.Title>
                </Container>
                <hr />
                <Container className="about-container">
                <Card.Text className="about-sub">
                  "Tetap menyerah, jangan semangat"
                </Card.Text>
                
                  <Card.Text className="about-card-title">
                  <Link to={'https://www.linkedin.com/in/anggaardhinata/'} target="blank">
                    Click to Find Me on LinkedIn
                    </Link>
                  </Card.Text>
                </Container>
              </Card>
            </Col>
            <Col className="md-4">
              <Card
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1500"
                className="about-card-style"
                style={{ width: "18rem" }}
              >
                <Container className="about-container">
                  <img className="about-img-parent" src={rf} alt="box" />
                  <Card.Title className="about-role-title">
                    Rizaldi Fauzi
                  </Card.Title>
                  <Card.Title className="about-card-title">
                    Project Manager
                  </Card.Title>
                </Container>
                <hr />
                <Container className="about-container">
                <Card.Text className="about-sub">
                  "You don't have to be great to start, but you have to start to
                  be great"
                </Card.Text>
                  <Card.Text className="about-card-title">
                  <Link to={'https://www.linkedin.com/in/rfauzi44/'} target="blank">
                    Click to Find Me on LinkedIn
                    </Link>
                  </Card.Text>
                </Container>
              </Card>
            </Col>
            <Col className="md-4">
              <Card
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1500"
                className="about-card-style"
                style={{ width: "18rem" }}
              >
                <Container className="about-container">
                  <img className="about-img-parent" src={ardi} alt="box" />
                  <Card.Title className="about-role-title">
                    Ahmad Saifudin A
                  </Card.Title>
                  <Card.Title className="about-card-title">
                   Back-End Developer
                  </Card.Title>
                </Container>
                <hr />
                <Container className="about-container">
                <Card.Text className="about-sub">
                  "You don't have to be great to start, but you have to start to
                  be great"
                </Card.Text>
                  <Card.Text className="about-card-title">
                    <Link to={'https://www.linkedin.com/in/ardhisaif/'} target="blank">
                    Click to Find Me on LinkedIn
                    </Link>
                  </Card.Text>
                </Container>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default About;
