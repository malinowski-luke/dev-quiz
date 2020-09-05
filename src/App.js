import React, { useState } from 'react'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import ThemeContext from './context/ThemeContext'
import AnswersContext from './context/AnswersContext'
import routes from './routes'
import Colors from './utils/colorsConfig'
import './App.css'

const lightTheme = {
  background: Colors.backgroundLight,
  color: Colors.appTextLight,
}

const darkTheme = {
  background: Colors.backgroundDark,
  color: Colors.appTextDark,
}

function App() {
  const [theme, setTheme] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState({
    answerKey: [],
    userAnswers: [],
  })

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AnswersContext.Provider value={{ quizAnswers, setQuizAnswers }}>
        <div
          style={theme ? { ...darkTheme } : { ...lightTheme }}
          className='App'
        >
          {/* fixed at top */}
          <Header />
          {/* fixed at bottom */}
          <Slider labels={['Ligth Mode', 'Dark Mode']} />
          {routes}
        </div>
      </AnswersContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
