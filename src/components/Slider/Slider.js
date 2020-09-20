import React, { useContext } from 'react'
import ThemeContext from '../../context/DarkModeContext'
import './Slider.css'

export default function Slider({ labels }) {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  const handleToggle = () => setDarkMode(!darkMode)

  return (
    <div className='slider-container'>
      <p>{labels[0]}</p>
      <label className='switch'>
        <input type='checkbox' onChange={handleToggle} checked={darkMode} />
        <span className='slider round'></span>
      </label>
      <p>{labels[1]}</p>
    </div>
  )
}
