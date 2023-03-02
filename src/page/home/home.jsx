import React from 'react'
import './home.css'
import NavigationBar from '../../components/navbar/navbar'
import { Col, Container, Row } from 'react-bootstrap'
import pict from '../../assets/image/woman.png'

function Home() {
  return (
    <div className='nv-bg'>
        <NavigationBar/>
        <Container className='algn-txt'>
           <Row>
            <Col className='hm-ld-txt'>
            <h1 className='hm-font-header'>Take Your Time</h1>
            <h1 className='hm-font-header'>And <span className='hm-shop-clr' >Shop</span></h1>
            <h1 className='hm-font-header' >Anywhere</h1>
            <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit..
              </p>
            </Col>
            <Col>
            <img 
            className='hm-bg'
            src={pict}
            alt='woman-pict'
            >
            </img>
            </Col>
           </Row>
           
        </Container>
    </div>
  )
}

export default Home