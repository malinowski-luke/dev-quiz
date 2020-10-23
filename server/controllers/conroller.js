const fs = require('fs')

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)

module.exports = {
  getLandingData: (req, res) => {
    const landingData = JSON.parse(
      fs.readFileSync(__dirname + '/../data/landingData.json')
    )
    return res.status(200).send(landingData)
  },
  getQuiz: (req, res) => {
    const { subject } = req.params
    if (!subject) return res.status(400).send('Subject parameter required!')
    // read file
    const quizzes = JSON.parse(
      fs.readFileSync(__dirname + '/../data/quizQuestions.json')
    )
    res.status(200).send(shuffle([...quizzes[subject]]))
  },
}
