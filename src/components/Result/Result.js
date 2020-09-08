import React, { useContext } from 'react'
import Card from '../Card/Card'
import AnswersContext from '../../context/AnswersContext'
import { getQuizResult } from '../../utils/appUtils'
import Button from '../Button/Button'
import SmileyFace from '../SmileyFace/SmileyFace'

function Result() {
  // context
  const { quizAnswers, setQuizAnswers } = useContext(AnswersContext)

  //util func
  const userQuizScore = getQuizResult(quizAnswers)

  // result vars
  const didUserPass = userQuizScore >= 65
  const userMsg = didUserPass ? 'Congrats You Passed!' : 'Try Again...'
  const smileyExpression = didUserPass ? 'happy' : 'sad'

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
    <Card padding>
      <h2 className='text-center'>
        {userMsg} Result:{' '}
        <span style={didUserPass ? { ...passStyle } : { ...failedStyle }}>
          {userQuizScore}%
        </span>
      </h2>
      <SmileyFace smileyExpression={smileyExpression} />
      <Button path='/landing' onClick={clearCurrentAnswers} size='lg'>
        Home
      </Button>
    </Card>
  )
}

export default Result
