const landingData = require('../data/landingData')
const quizzes = require('../data/quizQuestions')

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)

module.exports = {
  getLandingData: (req, res) => {
    return res.status(200).send(landingData)
  },
  getQuiz: (req, res) => {
    const { subject } = req.params
    const quiz = shuffle([...quizzes[subject]])
    return res.status(200).send(quiz)
  },
}
