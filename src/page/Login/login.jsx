import React from 'react'
import pict from '../../assets/image/login.png'
import email from '../../assets/icon/baseline_mail_outline_black_24dp.png'
import passpict from '../../assets/icon/baseline_vpn_key_black_24dp.png'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

//? untuk styling ngambil dari classname punya register gaes


function Login() {

  return (
    <div>
        <Container className='login-margn'>
            <Row>
            <Col className='sign-col'>
            <h1>Welcome Back!</h1>
            <p className='sign-fontclr'>Steps to get started, find the best stuff.</p>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"> <img src={email} alt='username'></img></InputGroup.Text>
        <Form.Control
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"> <img src={passpict} alt='username'></img></InputGroup.Text>
        <Form.Control
            type='password'
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <p className='sign-fontclr'>Forgot Password ?</p>
            <div className='sign-btn'>
              <Button variant="primary">Login</Button>{' '}
              </div>
              <br/>
              <br/>
              <br/>
                <div>
              <p className='login-crtacc'>Not Registerd yet ?  <a href="/register">Create an Account</a> </p>
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
  )
}

export default Login