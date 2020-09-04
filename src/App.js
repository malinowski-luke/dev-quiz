import React, { useState, useContext } from 'react'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import ThemeContext from './context/ThemeContext'
import AnswersContext from './context/AnswersContext'
import routes from './routes'
import './App.css'

const lightTheme = {
  background: '#f3f3f3',
}

const darkTheme = {
  background: '#0A0A24',
  color: '#ffffff',
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
          <Header />
          <Slider labels={['Ligth Mode', 'Dark Mode']} />
          {routes}
        </div>
      </AnswersContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
