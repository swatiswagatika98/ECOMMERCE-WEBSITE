import React from 'react'
import './Footer.css'
import { SiYoutube } from 'react-icons/si';
import { BsSpotify } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';


export default function Footer() {
  return (
    <div className='footer'>
      <span className='footer-title'>The Generics</span>
      <ul>
        <li><SiYoutube/></li>
        <li> <BsSpotify/></li>
        <li><BsFacebook/></li>
      </ul>
    </div>
  )
}
