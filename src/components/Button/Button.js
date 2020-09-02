import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './Button.css'

const ligthTheme = {
  background: '#4bb04f',
}

const darkTheme = {
  background: '#FEBD3F',
}

export default function Button({ text, onClick }) {
  const { theme } = useContext(ThemeContext)
  return (
    // onClick={() => onClick()}
    <button
      style={theme ? { ...darkTheme } : { ...ligthTheme }}
      className='Button'
    >
      {text}
    </button>
  )
}
