import React from 'react'
import banner2 from './banner2.jpg'
import logo from './logo.png'

import './Components.css' 

function Footer() {
  return (<>
    
    <footer classname='footer'>

    <ul>About Us :- 
        <li>Lorem ipsum dolor sit amet  </li>
        <li>Lorem, ipsum dolor.</li>
        
    </ul>

    <ul>Contact Us :-
        <li>call</li>
        <li>mail</li>
        <li>Web</li>
        <li></li>
    </ul>

    <ul>Socials :-
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Linkedin</li>
        <li>Github</li>
    </ul>

    <ul>
        <li>
            <img src={logo} className='img-fluid' style={{width:'100px'}} alt="logo" />
        </li>
    </ul>

    </footer>

    <img src={banner2} style={{width:'100%'}} alt="banner" />
    </>
  )
}

export default Footer