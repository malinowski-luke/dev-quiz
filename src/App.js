import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import ThemeContext from './context/DarkModeContext'
import AnswersContext from './context/AnswersContext'
import routes from './routes'
import getTheme from './utils/jsStyle/themes'
import { getInitialMode } from './utils/appUtils'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode())
  const [quizAnswers, setQuizAnswers] = useState({
    answerKey: [],
    userAnswers: [],
  })

  useEffect(() => {
    // set users preferred mode in localStorage to persit on reloads
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <AnswersContext.Provider value={{ quizAnswers, setQuizAnswers }}>
        <div style={getTheme(darkMode, 'app')} className='App'>
          <Header />
          {routes}
          <Slider labels={['Ligth Mode', 'Dark Mode']} />
        </div>
      </AnswersContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
