import React, { useState, useContext } from 'react'
import InputGroup from '../InputGroup/InputGroup'
import { useHistory } from 'react-router-dom'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import AnswersContext from '../../context/AnswersContext'

function Form({ quiz }) {
  // context
  const { quizAnswers, setQuizAnswers } = useContext(AnswersContext)

  // state
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')

  // vars
  const { push } = useHistory()
  let currentQuestion = quiz[currentIndex]
  let getProgress = `${currentIndex + 1}/${quiz.length}`

  // util functions
  const isLastQuestion = () => currentIndex + 1 === quiz.length
  const goToNextQuestion = () => {
    setCurrentIndex(currentIndex + 1)
    setUserAnswer('')
  }

  //  event handlers
  const handleSkip = () => {
    goToNextQuestion()
    setQuizAnswers({
      ...quizAnswers,
      userAnswers: [...quizAnswers.userAnswers, userAnswer],
    })
    if (isLastQuestion()) push('/result')
  }

  const handleSubmit = () => {
    if (!userAnswer) return alert('Please Select a Answer!')
    setQuizAnswers({
      ...quizAnswers,
      userAnswers: [...quizAnswers.userAnswers, userAnswer],
    })
    goToNextQuestion()
    if (isLastQuestion()) push('/result')
  }

  const handleNavigateHome = () => {
    const navigateHome = window.confirm(
      'Your progress will be lost!\nAre You Sure?'
    )
    if (navigateHome) push('/landing')
  }

  // buttons config
  const buttons = [
    {
      type: 'submit',
      action: handleSubmit,
    },
    {
      type: 'skip',
      action: handleSkip,
    },
    {
      type: 'home',
      action: handleNavigateHome,
    },
  ]

  const { question, answers } = currentQuestion
  return (
    <>
      <div>
        <h3>{question}</h3>
        <p>{getProgress}</p>
      </div>
      <InputGroup
        answers={answers}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
      />
      <ButtonGroup buttons={buttons} />
    </>
  )
}

export default Form
