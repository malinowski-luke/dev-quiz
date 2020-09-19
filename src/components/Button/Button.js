import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DarkModeContext from '../../context/DarkModeContext'
import getTheme from '../../utils/jsStyle/themes'
import './Button.css'

function Button({ children, path, onClick, size }) {
  const { darkMode } = useContext(DarkModeContext)

  const classList = `Button ${size === 'sm' ? 'button-sm' : 'button-lg'}`

  const link = (
    <Link
      to={path || '/'}
      style={getTheme(darkMode, 'button')}
      className={classList}
      onClick={onClick && onClick}
    >
      {children}
    </Link>
  )

  const button = (
    <button
      style={getTheme(darkMode, 'button')}
      className={classList}
      onClick={onClick}
    >
      {children}
    </button>
  )

  return path ? link : button
}

export default Button
