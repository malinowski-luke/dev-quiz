const landingData = require('../data/landingData')
const quizzes = require('../data/quizQuestions')

module.exports = {
  getLandingData: (req, res) => {
    return res.status(200).send(landingData)
  },
  getQuiz: (req, res) => {
    const { subject } = req.params
    return res.status(200).send(quizzes[subject])
  },
}
