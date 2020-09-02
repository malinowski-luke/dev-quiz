import React, { useRef, useContext } from 'react'
import './Card.css'
import Button from '../Button/Button'
import { ThemeContext } from '../../context/ThemeContext'

const ligthTheme = {
  background: '#ffffff',
  border: '1px solid #000000',
}

const darkTheme = {
  background: '#3B3B4E',
  border: '1px solid #ffffff',
}

export default function Card({ title, logo, hoverable }) {
  const cardRef = useRef()
  const { theme } = useContext(ThemeContext)

  const hoverChange = (domElm, scaleUp = false) => {
    domElm.style.animation = hoverable
      ? `${scaleUp ? 'scale-up' : 'scale-down'} 0.3s ease-in forwards`
      : ''
  }

  return (
    <div
      ref={cardRef}
      style={theme ? { ...darkTheme } : { ...ligthTheme }}
      className='Card'
      onMouseEnter={() => hoverChange(cardRef.current, true)}
      onMouseLeave={() => hoverChange(cardRef.current)}
    >
      <img src={logo} />
      <h2>{title}</h2>
      <Button text='Take Quiz!' />
    </div>
  )
}
