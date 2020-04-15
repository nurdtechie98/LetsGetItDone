require('dotenv').config()

module.exports = {
  PORT: process.env.PORT || 80,
  DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/aitiaa'
}
