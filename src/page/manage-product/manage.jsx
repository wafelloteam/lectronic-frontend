import { React, useState } from "react";
import "./manage.css";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import NavbarAuth from "../../components/navbarAuth/navbarauth";
import ManageCards from "../../components/manage-card/manage-card";
import filter from "../../assets/icon/outline_filter_alt_black_24dp.png";
import plus from "../../assets/icon/plus.png";
import searchicon from "../../assets/icon/search.png";

function Manage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <NavbarAuth />
        <Container>
          <Row>
            <Container className="prod-dspl">
              <Col>
                <InputGroup className="mb-3 prod-search">
                  <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="primary" id="button-addon2">
                    <img
                      className="prod-search-size"
                      src={searchicon}
                      alt="btn-search"
                    />
                  </Button>
                </InputGroup>
              </Col>

              <div className="mng-btn-nav">
                <Button variant="outline-light">
                  <img className="prod-btn-size" src={filter} alt="box" />
                </Button>
              </div>

              <div className="mng-btn-blue">
                <Button onClick={handleShow} variant="primary">
                  <img className="prod-btn-plus" src={plus} alt="add-product" />
                </Button>
              </div>
            </Container>
          </Row>
        </Container>
        <Container>
          <ManageCards />
        </Container>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
          <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          </Col>
          <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Manage;
