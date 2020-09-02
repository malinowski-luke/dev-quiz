const landingData = require('../data/landingData')

module.exports = {
  getLandingData: (req, res) => {
    return res.status(200).send(landingData)
  },
}
