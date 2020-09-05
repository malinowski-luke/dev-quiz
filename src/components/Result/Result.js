import React, { useContext } from 'react'
import Card from '../Card/Card'
import AnswersContext from '../../context/AnswersContext'
import { getQuizResult } from '../../utils/appUtils'
import Button from '../Button/Button'

function Result() {
  // context
  const { quizAnswers, setQuizAnswers } = useContext(AnswersContext)
  const userQuizScore = getQuizResult(quizAnswers)
  const didUserPass = userQuizScore >= 65
  const userMsg = didUserPass ? 'Congrats You Passed!' : 'Almost There...'

  const clearCurrentAnswers = () => {
    setQuizAnswers({ answerKey: [], userAnswers: [] })
  }

  const passStyle = {
    color: '#4bb04f',
  }

  const failedStyle = {
    color: '#a60000',
  }

  return (
    <Card>
      <h1 className='text-center'>
        {userMsg} Result:{' '}
        <span style={didUserPass ? { ...passStyle } : { ...failedStyle }}>
          {userQuizScore}%
        </span>
      </h1>
      <Button path='/landing' onClick={clearCurrentAnswers} size='lg'>
        Take Another Quiz
      </Button>
    </Card>
  )
}

export default Result
