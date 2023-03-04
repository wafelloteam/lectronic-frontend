import React from 'react'
import './product.css'
import NavigationBar from '../../components/navbar/navbar'
import Card from '../../components/cards/cards'
import { Container } from 'react-bootstrap'

function Product() {
  return (
    <div>
        <NavigationBar/>
        <Container>
        <Card/>
        </Container>
    </div>
  )
}

export default Product