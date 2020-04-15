const { Schema, model } = require('mongoose')
const uniquePlugin = require('mongoose-unique-validator')

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: String,
    default: 0
  }
}).plugin(uniquePlugin)

module.exports = model('User', User)
