import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './Slider.css'

export default function Slider({ labels }) {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div className='slider-container'>
      <p>{labels[0]}</p>
      <label className='switch'>
        <input type='checkbox' onClick={() => setTheme(!theme)} />
        <span className='slider round'></span>
      </label>
      <p>{labels[1]}</p>
    </div>
  )
}
