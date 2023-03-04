import React from 'react'
import './home.css'
import NavigationBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import { Button, Card, Col, Container, Form, InputGroup, Nav, Row } from 'react-bootstrap'
import example from '../../assets/image/AIAIAI-TMA-1.jpg'
import pict from '../../assets/image/woman.png'
import box from '../../assets/icon/box.png'
import coin from '../../assets/icon/coin.png'
import cart from '../../assets/icon/shopping_cart.png'
import searchicon from '../../assets/icon/search.png'


function Home() {
  return (
    <>
    <div className='hm-bg-div' >
        <NavigationBar/>
        <Container className='algn-txt'>
           <Row>
            <Col className='hm-ld-txt'>
            <h1 className='hm-font-header'>Take Your Time</h1>
            <h1 className='hm-font-header'>And <span className='hm-shop-clr' >Shop</span></h1>
            <h1 className='hm-font-header' >Anywhere</h1>
            <p className='hm-font-desc'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit..
              </p>
              <div>
              <Button variant="primary">Shop Now</Button>{' '}
              <Button variant="outline-primary">Be a Seller</Button>{' '}
              </div>
            </Col>
            <Col>
            <Container>
            <img 
            className='hm-bg'
            src={pict}
            alt='woman-pict'
            >
            </img>
            </Container>
            </Col>
           </Row>
        </Container>
    </div>

    {/* batas page */}

    <div>
    <Container>
       <div  >
       <Card
       className='hm-cr'
         bg={'light'}
         style={{ width: '147px', height: '52px' }}
         
       >
         <Card.Title className='hm-cr-title'>How it Works</Card.Title>
       </Card>
       <div className='hm-title-display'>
       <h1 className='hm-pg-title' >Make An</h1>
       <h1 className='hm-pg-title'>Order Easily</h1>
       </div>
       
       </div>

      <div className='hm-d-flk'>
        <Row>
          <Col>

      <Card className='hmCardStyle' style={{ width: '18rem'}}>
      <div className='imgParent'>
          <img className='img' src={cart} alt="box" />
      </div>
      <Card.Title className='hm-card-title'>Select Product</Card.Title>
      <Card.Text className='hm-card-subtitle'>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </Card.Text>
      </Card>
          </Col>
          <Col>

      <Card className='hmCardStyle' style={{ width: '18rem'}}>
      <div className='imgParent'>
          <img className='img' src={coin} alt="box" />
      </div>
      <Card.Title className='hm-card-title'>Make Payment</Card.Title>
      <Card.Text className='hm-card-subtitle'>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </Card.Text>
      </Card>

          </Col>
          <Col>

      <Card className='hmCardStyle' style={{ width: '18rem'}}>
      <div className='imgParent'>
          <img className='img'  src={box} alt="box" />
      </div>
      <Card.Title className='hm-card-title'>Receive Product</Card.Title>
      <Card.Text className='hm-card-subtitle'>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </Card.Text>
      </Card>
          </Col>
        </Row>
      </div>
     </Container>
    </div>

    {/* batas page */}

    <div>
      <Container>
      <div  >
       <Card
       className='hm-cr'
         bg={'light'}
         style={{ width: '147px', height: '52px' }}
         
       >
         <Card.Title className='hm-cr-title'>Our Product</Card.Title>
       </Card>
       <div className='hm-title-display'>
       <h1 className='hm-pg-title' >The Best Product By</h1>
       <h1 className='hm-pg-title'>Lectronic</h1>
       </div>
       <div>
        <div className='hm-pd-search'>
        <Row>
          <Col>
          <Nav variant="pills" defaultActiveKey="#">
          <Nav.Item>
              <Nav.Link href="#">Headphone</Nav.Link>
              </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-1" href="#airconditioner">Air Conditioner</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-2" href="#television">Television</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-3" href="#router">Router</Nav.Link>
            </Nav.Item>
        </Nav>
          </Col>
          <Col>
          <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="button-addon2">
          <img className='hm-search-size' src={searchicon} alt='btn-search'/>
        </Button>
      </InputGroup>
          </Col>
        </Row>
        </div>

        <Row> 
        <Col>
    <Card className='card-rad' style={{ width: '18rem'}}>
      <div className='m-3 '>
    <Card.Text className='card-txt1'>AIAIAI-TMA-1</Card.Text>
    <Card.Text className='card-txt2'>{'Rp '}300000{',00'}</Card.Text>
      </div>
    <Card.Img variant="top" src={example} />
    <Card.Body>
    <div className='card-btn'>
        <Button variant="primary">Detail</Button>{' '}
        <Button variant='outline-primary'>
          Add to Cart
          </Button>{''}
      </div>
    </Card.Body>
  </Card>
  </Col>
  
  <Col>
    <Card className='card-rad' style={{ width: '18rem'}}>
      <div className='m-3 '>
    <Card.Text className='card-txt1'>AIAIAI-TMA-1</Card.Text>
    <Card.Text className='card-txt2'>{'Rp '}300000{',00'}</Card.Text>
      </div>
    <Card.Img variant="top" src={example} />
    <Card.Body>
    <div className='card-btn'>
        <Button variant="primary">Detail</Button>{' '}
        <Button variant="outline-primary">Add to Cart</Button>{' '}
      </div>
    </Card.Body>
  </Card>
  </Col>

  <Col>
    <Card className='card-rad' style={{ width: '18rem'}}>
      <div className='m-3 '>
    <Card.Text className='card-txt1'>AIAIAI-TMA-1</Card.Text>
    <Card.Text className='card-txt2'>{'Rp '}300000{',00'}</Card.Text>
      </div>
    <Card.Img variant="top" src={example} />
    <Card.Body>
    <div className='card-btn'>
        <Button variant="primary">Detail</Button>{' '}
        <Button variant="outline-primary">Add to Cart</Button>{' '}
      </div>
    </Card.Body>
  </Card>
  </Col>

  </Row>
       </div>
       </div>
      </Container>
      <Footer/>
    </div>
    </>
  )
}

export default Home