const express = require('express'),
  app = express()

const PORT = 9000

const path = require('path'),
  { imgPath } = require('./config'),
  controller = require('./controllers/conroller')

//  serve static files
app.use(
  imgPath,
  express.static(path.join(__dirname, '/../server/assets/images'))
)

// routes
app.get('/landing', controller.getLandingData)
app.get('/quiz/:subject', controller.getQuiz)

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))
