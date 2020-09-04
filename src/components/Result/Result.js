import React, { useContext } from 'react'
import Card from '../Card/Card'
import NavButton from '../NavButton/NavButton'
import AnswersContext from '../../context/AnswersContext'
import { getQuizResult } from '../../utils/appUtils'

function Result() {
  // context
  const { quizAnswers } = useContext(AnswersContext)
  const userQuizScore = getQuizResult(quizAnswers)

  return (
    <Card>
      Result: {userQuizScore}%
      <NavButton path='/landing'>Take Another Quiz</NavButton>
    </Card>
  )
}

export default Result
