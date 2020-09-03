import React, { useRef, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Card from '../Card/Card'
import InputGroup from '../InputGroup/InputGroup'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import fadeIn from '../../utils/animations/fadeIn'
import getData from '../../services/getData'
import handleNavigateHome from '../../utils/handlers/handleNavigateHome'

function Quiz() {
  // state,
  const [quiz, setQuiz] = useState([
    {
      id: null,
      question: '',
      correctAnswer: '',
      userAnswer: '',
      answers: {
        a: '',
        b: '',
        c: '',
        d: '',
      },
    },
  ])
  const [userAnswer, setUserAnswer] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  // util vars
  const params = useParams()
  const domElm = useRef()
  const { push } = useHistory()
  let currentQuestion = quiz[currentIndex]

  useEffect(() => {
    fadeIn(domElm.current)
    getData(`/quiz/${params.subject}`, setQuiz)
  }, [])

  // event handlers
  const handleSkip = () => {
    setCurrentIndex(currentIndex + 1)
    setUserAnswer('')
    if (isLastQuestion()) push('/result')
  }

  // util functions
  const getProgress = () => `${currentIndex + 1}/${quiz.length}`
  const isLastQuestion = () => currentIndex + 1 === quiz.length

  const buttons = [
    {
      type: 'submit',
      action: () => console.log('submit'),
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

  return (
    <div ref={domElm}>
      <Card>
        <h3 className='text-center'>{currentQuestion.question}</h3>
        <p>{getProgress()}</p>
        <InputGroup
          answers={currentQuestion.answers}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
        />
        <ButtonGroup buttons={buttons} />
      </Card>
    </div>
  )
}

export default Quiz
