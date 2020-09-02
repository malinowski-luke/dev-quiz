import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import './NavButton.css'

const ligthTheme = {
  background: '#4bb04f',
}

const darkTheme = {
  background: '#FEBD3F',
}

export default function NavButton({ text, path }) {
  const { theme } = useContext(ThemeContext)
  return (
    <Link
      to={path}
      style={theme ? { ...darkTheme } : { ...ligthTheme }}
      className='NavButton'
    >
      {text}
    </Link>
  )
}
