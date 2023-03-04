import React from 'react'
import './cards.css'
import pictprod from '../../assets/image/AIAIAI-TMA-1.jpg'
import { Button, Card, Col } from 'react-bootstrap'

function Cards() {
  return (
    <Col>
    <Card className='m-5 card-rad' style={{ width: '18rem'}}>
      <div className='m-3 '>
    <Card.Text className='card-txt1'>AIAIAI-TMA-1</Card.Text>
    <Card.Text className='card-txt2'>{'Rp '}300000{',00'}</Card.Text>
      </div>
    <Card.Img variant="top" src={pictprod} />
    <Card.Body>
    <div className='card-btn'>
        <Button variant="primary">Detail</Button>{' '}
        <Button variant="outline-primary">Add to Cart</Button>{' '}
      </div>
    </Card.Body>
  </Card>
  </Col>
  )
}

export default Cards