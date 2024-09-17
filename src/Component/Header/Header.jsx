import React from 'react'
import "./Header.css"
import { FaTerminal } from "react-icons/fa";
const Header = () => {
  return (
    <div className='heading'>
      <FaTerminal className='Icon'/>
      <h1>Generate My Password</h1>
    </div>
  )
}

export default Header
