import React, { useRef, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './Card.css'

const ligthTheme = {
  background: '#ffffff',
  border: '1px solid #000000',
}

const darkTheme = {
  background: '#3B3B4E',
  border: '1px solid #ffffff',
}

export default function Card({ children, hoverable }) {
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
      {children}
    </div>
  )
}
