const mongoose = require('mongoose')

const Auth = new mongoose.Schema({
  userid: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Auth', Auth)
