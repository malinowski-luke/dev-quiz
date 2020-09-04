export const getQuizResult = (quizAnswers) => {
  const { answerKey, userAnswers } = quizAnswers
  let correctAnswers = 0

  userAnswers.forEach((answer, index) => {
    if (answer === answerKey[index]) correctAnswers += 1
  })

  const result = (correctAnswers / answerKey.length) * 100
  return result
}
