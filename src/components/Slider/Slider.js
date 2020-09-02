import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './Slider.css'

export default function Slider() {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div className='slider-container'>
      <p>Ligth Mode</p>
      <label className='switch'>
        <input type='checkbox' onClick={() => setTheme(!theme)} />
        <span className='slider round'></span>
      </label>
      <p>Dark Mode</p>
    </div>
  )
}
