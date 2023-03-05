import React from 'react'
import './profile.css'
import { NavDropdown } from 'react-bootstrap'
import logo from '../../assets/icon/Logo.png'
import user from '../../assets/image/edward-photo.png'

function Profile() {
  return (
    <NavDropdown
    title= {<img className='nav-img-size' src={logo} alt='logo-lectronic' />}
    drop='start'
  >
    <NavDropdown.Item className='nav-dropdown-user' href="#action/3.1">
      <img className='imgNav' src={user} alt='user-img'/>
    </NavDropdown.Item>
    <NavDropdown.Item className='nav-dropdown-user' href="#action/3.1">Username</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Cart</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
  </NavDropdown>
  
  )
}

export default Profile