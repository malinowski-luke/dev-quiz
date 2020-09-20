import React, { useState, useEffect } from 'react'
import { useWindowHeight } from '@react-hook/window-size'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import ThemeContext from './context/DarkModeContext'
import AnswersContext from './context/AnswersContext'
import routes from './routes'
import getTheme from './utils/jsStyle/themes'
import { getInitialMode } from './utils/appUtils'
import './App.css'

function App() {
  const clientHeight = useWindowHeight()

  const [darkMode, setDarkMode] = useState(getInitialMode())

  const [quizAnswers, setQuizAnswers] = useState({
    answerKey: [],
    userAnswers: [],
  })

  useEffect(() => {
    // set clients app height
    document.getElementById('app').style.height = `${clientHeight}px`
    // set clients preferred color mode in localStorage to persit on reloads
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [clientHeight, darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <AnswersContext.Provider value={{ quizAnswers, setQuizAnswers }}>
        <div id='app' style={getTheme(darkMode, 'app')} className='App'>
          <Header />
          {routes}
          <Slider labels={['Ligth Mode', 'Dark Mode']} />
        </div>
      </AnswersContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
