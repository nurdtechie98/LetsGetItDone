module.exports = () => {
  const express = require('express')

  const app = express()

  const mongoose = require('mongoose')
  const config = require('./utils/config')
  const middleware = require('./utils/middleware')
  const WebSocket = require('ws')
  const cookieParser = require('cookie-parser')

  // IMPORT ALL CONTROLLERS HERE
  const userController = require('./controllers/user.controller')
  const authController = require('./controllers/auth.controller')
  const fileController = require('./controllers/file.controller')

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cookieParser())

  // MIDDLEWARE ROUTING SPECIFIED
  app.use('/api/users', userController)
  app.use('/api/auth', authController)
  app.use('/file', fileController)

  app.get('/', (req, res) => {
    res.status(200).json({
      hello: 'world'
    })
  })

  app.use(middleware.MongooseErrorHandler)
  app.use(middleware.unknownEndpoint) // 404 Handeled

  const server = app.listen(config.PORT, (err) => {
    if (err) console.error(err)
    else {
      console.log(`Server started at ${config.PORT}`)
      mongoose.connect(config.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }, (error) => {
        if (error) console.error(error)
        else console.log(`Connected to mongodb uri: ${config.DB_URI}`)
      })
    }
  })

  // Demonstrate tls client-server
  // Following is the server, for client run 'node client.js' in a separate tab
  const wss = new WebSocket.Server({ server: server, path: '/ws' })

  wss.on('connection', ws => {
    ws.on('message', message => {
      console.log(`Received message => ${message}`)
    })
    ws.send('Hello! Message From Server!!')
  })
}
