import React from 'react'
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <div className='social-icon'>

      <a href="https://linkedin.com/in/mrsahiljaiswal">
      <FaLinkedin  className='icon' id='linkedin'/>
      </a>

      <a href="https://github.com/mrsahiljaiswal">
      <FaGithub  className='icon' id='github'/>
      </a>

      <a href={'https://instagram.com/mr_sahiljaiswal'}><FaInstagram className='icon' id='instagram'/>
      </a>

    </div>
  )
}

export default Footer
