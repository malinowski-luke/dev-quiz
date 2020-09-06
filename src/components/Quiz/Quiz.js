import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'
import Form from '../Form/Form'
import getData from '../../services/getData'
import quizDefaultState from './quizDefaultState'
import AnswersContext from '../../context/AnswersContext'

function Quiz() {
  const [quiz, setQuiz] = useState(quizDefaultState)
  const { quizAnswers, setQuizAnswers } = useContext(AnswersContext)
  const params = useParams()

  const answerKey = quiz.map((question) => question.correctAnswer)
  const stateIsDefaultState = quiz[0].question === quizDefaultState[0].question

  useEffect(() => {
    if (stateIsDefaultState) getData(`/quiz/${params.subject}`, setQuiz)
    setQuizAnswers({ ...quizAnswers, answerKey })
  }, [quiz])

  return (
    <Card size='lg' padding>
      <Form quiz={quiz} />
    </Card>
  )
}

export default Quiz
