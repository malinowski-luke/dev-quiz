const express = require('express')
const controller = require('../controllers/conroller')

const router = express.Router()

// routes
router.get('/landing', controller.getLandingData)
router.get('/quiz/:subject', controller.getQuiz)

module.exports = router
