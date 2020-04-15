// Custom Middlewares Written here
const MongooseErrorHandler = (error, request, response, next) => {
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({
      error: 'malformatted id'
    })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({
      error: error._message || error.message
    })
  } else if (error.name === 'MongoError') {
    return response.status(500).json({
      error: error._message || error.message
    })
  } else if (error.name === 'UnknownError') {
    return response.status(error.statusCode).json({
      error: error._message || error.message
    })
  }

  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({
    error: `unknown endpoint ${request.path}`
  })
}

const ageValidation = (req, res, next) => {
  const age = req.body.age
  if (age >= 0 && age <= 120) {
    next()
  } else {
    res.status(422).send({
      error: 'invalid age value'
    })
  }
}

const authenticated = (req, res, next) => {
  const userid = req.cookies.userid
  if (userid) {
    next()
  } else {
    res.status(400).send({
      error: 'user not logged in'
    })
  }
}

module.exports = {
  MongooseErrorHandler,
  unknownEndpoint,
  ageValidation,
  authenticated
}
