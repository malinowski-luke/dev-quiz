import React, { useEffect, useRef, useContext } from 'react'
import DarkModeContext from '../../context/DarkModeContext'
import fadeIn from '../../utils/animations/fadeIn'
import getTheme from '../../utils/jsStyle/themes'
import './Card.css'

export default function Card({ children, size, hoverable, padding }) {
  const cardRef = useRef()
  const { darkMode } = useContext(DarkModeContext)

  const hoverChange = (domElm, scaleUp = false) => {
    if (hoverable)
      domElm.style.animation = `${
        scaleUp ? 'scale-up' : 'scale-down'
      } 0.3s ease-in forwards`
  }

  useEffect(() => {
    fadeIn(cardRef.current)
  })

  return (
    <div
      ref={cardRef}
      style={getTheme(darkMode, 'card')}
      className={`Card ${size === 'sm' ? 'card-sm' : 'card-lg'} ${
        padding && 'card-padding'
      }`}
      onMouseEnter={() => hoverChange(cardRef.current, true)}
      onMouseLeave={() => hoverChange(cardRef.current)}
    >
      {children}
    </div>
  )
}
