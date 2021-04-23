require('dotenv').config({})
const express = require('express')
const morgan = require('morgan')
const responseTime = require('response-time')
const cors = require('cors')

const router = require('./router')
const application = express()

const PORT = process.env.PORT

const path = require('path')
controller = require('./controllers/conroller')

// react build
if (process.env.ENVIRONMENT === 'production') {
  application.use(express.static(`${__dirname}/../build`))
}

// Logging
application.use(morgan('short'))
// Response time Logging
application.use(responseTime())

// Request Body Parsing
application.use(express.urlencoded({ extended: true }))
application.use(express.json())

//  serve static files
application.use(
  '/images',
  express.static(path.join(__dirname, '/../server/assets/images'))
)

// Cross Origin
application.use(
  cors({
    credentials: true,
    origin: [process.env.BACKEND_URI],
    methods: ['GET'],
    maxAge: 84600,
  })
)

application.use(router)

application.listen(PORT, () =>
  console.log(`Server is running on Port: ${PORT}`)
)
