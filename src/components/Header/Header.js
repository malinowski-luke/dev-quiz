import React from 'react'
import jsLogo from '../../assets/js.png'
import './Header.css'

export default function Header() {
  return (
    <div className='Header'>
      <img src={jsLogo} className='logo' />
      <h1>Dev Quiz {'</>'}</h1>
    </div>
  )
}
