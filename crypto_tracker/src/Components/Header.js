import React from 'react'

import './Components.css' 

import logo from'./logo.png'


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    
    <Navbar expand="lg" className=" p-0"  >
      <Container fluid d-flex justify-content-end>
        <Navbar.Brand  className=' d-flex flex-end '>
        <NavLink to='/' style={{textDecoration:'none',color:'#6C53A2 ' }}>
        <div style={{fontFamily:'system-ui',width:'100%'}} className='h5 text-end fw-bold'>
        Crypto  <img src={logo} width="40px" alt="logo" /> INR Tracker
        </div>
        </NavLink>
        </Navbar.Brand>
          </Container>
    </Navbar>



    </>
  )
}

export default Header