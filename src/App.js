import React, { useState, useContext } from 'react'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import './App.css'
import { ThemeContext } from './context/ThemeContext'
import routes from './routes'

const lightTheme = {
  background: '#f3f3f3',
}

const darkTheme = {
  background: '#0A0A24',
  color: '#ffffff',
}

function App() {
  const [theme, setTheme] = useState(false)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={theme ? { ...darkTheme } : { ...lightTheme }} className='App'>
        <Header />
        <Slider />
        {routes}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
