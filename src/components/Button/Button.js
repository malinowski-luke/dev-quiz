import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import Colors from '../../utils/colorsConfig'
import './Button.css'

const ligthTheme = {
  background: Colors.buttonLight,
}

const darkTheme = {
  background: Colors.buttonDark,
}

function Button({ children, path, onClick, size }) {
  const { theme } = useContext(ThemeContext)

  const classList = `Button ${size === 'sm' ? 'button-sm' : 'button-lg'}`

  const link = (
    <Link
      to={path || '/'}
      style={theme ? { ...darkTheme } : { ...ligthTheme }}
      className={classList}
      onClick={onClick && onClick}
    >
      {children}
    </Link>
  )

  const button = (
    <button
      style={theme ? { ...darkTheme } : { ...ligthTheme }}
      className={classList}
      onClick={onClick}
    >
      {children}
    </button>
  )

  return path ? link : button
}

export default Button
