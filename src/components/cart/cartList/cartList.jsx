import React from 'react'
import { Col } from 'react-bootstrap';
import "./cartList.css"
import productImage from "../../../assets/image/AIAIAI-TMA-1.jpg"
import CheckBox from "../checkbox/checkBox";

function CartList() {
  return (
    <>
        <Col id="cart-list" >
            <CheckBox />
            <div className="cart-image">
              <img className='carts' src={productImage} alt=""/>
            </div>
            <div className='cart-text'>
              <div className='prod-name'>Sony MDR-5706</div>
              <div className='category-btn'>Headphone</div>
              <div className='prod-price'>$3000</div>
            
            </div>
        </Col>
    </>
  )
}

export default CartList