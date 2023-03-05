import {React, useState, useEffect} from 'react'
import './product.css'
import Cards from '../../components/cards/cards'
import cart from '../../assets/icon/shopping_cart.png'
import NavbarAuth from '../../components/navbarAuth/navbarauth'
import { Col, Container, Row, InputGroup, Form, Button } from 'react-bootstrap'
import searchicon from '../../assets/icon/search.png'
import filter from '../../assets/icon/outline_filter_alt_black_24dp.png'
import Category from '../../components/navcategory/category'
import useApi from '../../helpers/useApi'

function Product() {

  const api = useApi()
  const [product, setProduct] = useState([])

  const getBest = async () => {
    try {
      const {data} = await api.requests({
        method:'GET',
        url:'/vehicle/'
      })
      setProduct(data.data)
      
    } catch (error) {
      console.log(error)
    }
  }

    useEffect(() => {
      getBest()
    },[])


  return (
    <div>
        <NavbarAuth/>
        <Container>
          <Row>  
         <Container className='prod-dspl'>
          <Col>
          <InputGroup className="mb-3 prod-search">
        <Form.Control
    
      placeholder="Search"
      aria-label="Search"
      aria-describedby="basic-addon2"
    />
            <Button variant="primary" id="button-addon2">
              <img className='prod-search-size' src={searchicon} alt='btn-search'/>
            </Button>
        </InputGroup>
        </Col>
           
            <div className='prod-btn-nav' >
            <Button variant="outline-light">
           <img className='prod-btn-size' src={cart} alt="box" />
           </Button>
            </div>

            <div className='prod-btn-nav'>
            <Button variant="outline-light">
           <img className='prod-btn-size' src={filter} alt="box" />
           </Button>
            </div>
            
            
            </Container>
          </Row>
          <Category/>
          <Row>
        {product.map((v) => {
          return (
            <Cards
            id={v.id}
            name={v.name}
            price={v.price}
            image={v.image}

            />
          )
        })}
        </Row>
        </Container>
    </div>
  )
}

export default Product