import React from 'react'
import './manage.css'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import NavbarAuth from '../../components/navbarAuth/navbarauth'
import ManageCards from '../../components/manage-card/manage-card'
import filter from '../../assets/icon/outline_filter_alt_black_24dp.png'
import plus from '../../assets/icon/plus.png'
import searchicon from '../../assets/icon/search.png'
function Manage() {
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
              <Button variant="primary">
                <img className="prod-btn-plus" src={plus} alt="plus" />
              </Button>
            </div>
          </Container>
        </Row>
        </Container>
        <Container>
          <ManageCards/>
        </Container>
    </div>
    </>
  )
}

export default Manage