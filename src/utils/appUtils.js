// calculate quiz result
export const getQuizResult = (quizAnswers) => {
  const { answerKey, userAnswers } = quizAnswers
  let correctAnswers = 0

  userAnswers.forEach((answer, index) => {
    if (answer === answerKey[index]) correctAnswers += 1
  })

  const result = (correctAnswers / answerKey.length) * 100
  return result
}

// dark mode utils
export const getInitialMode = () => {
  const isReturingUser = 'dark' in localStorage
  const savedMode = JSON.parse(localStorage.getItem('dark'))
  const userPrefersDark = getPrefColorScheme()
  if (isReturingUser) return savedMode
  else if (userPrefersDark) return true
  else return false
}

// util function to get users browsers color scheme
// triggerd by getInitialMode
const getPrefColorScheme = () => {
  if (!window.matchMedia) return
  return window.matchMedia('(perfers-color-scheme:dark)').matches
}
