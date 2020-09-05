import React, { useEffect, useRef, useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import fadeIn from '../../utils/animations/fadeIn'
import Colors from '../../utils/colorsConfig'
import './Card.css'

const ligthTheme = {
  background: Colors.cardLight,
}

const darkTheme = {
  background: Colors.cardDark,
}

export default function Card({ children, size, hoverable }) {
  const cardRef = useRef()
  const { theme } = useContext(ThemeContext)

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
      style={theme ? { ...darkTheme } : { ...ligthTheme }}
      className={`Card ${size === 'sm' ? 'card-sm' : 'card-lg'}`}
      onMouseEnter={() => hoverChange(cardRef.current, true)}
      onMouseLeave={() => hoverChange(cardRef.current)}
    >
      {children}
    </div>
  )
}
