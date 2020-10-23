const express = require('express'),
  app = express()

const PORT = process.env.PORT || 9000

const path = require('path'),
  controller = require('./controllers/conroller')

// serve up front-end
app.use(express.static(`${__dirname}/../build`))

//  serve static files
app.use(
  '/images',
  express.static(path.join(__dirname, '/../server/assets/images'))
)

// routes
app.get('/landing', controller.getLandingData)
app.get('/quiz/:subject', controller.getQuiz)

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))
