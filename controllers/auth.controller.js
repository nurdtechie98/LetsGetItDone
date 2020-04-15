const router = require('express').Router()
const Auth = require('../models/auth.model')
const { authenticated } = require('../utils/middleware')
const bcrypt = require('bcryptjs')

router.post('/signup', async (req, res) => {
  const { userid, password } = req.body
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  const auth = new Auth({ userid, password: hashedPassword })
  console.log(hashedPassword)
  try {
    await auth.save()
    res.status(200).json({ userid, password, id: auth._id.toString() })
  } catch (err) {
    console.log(err)
  }
})

router.post('/login', async (req, res) => {
  const { userid, password } = req.body
  try {
    const auth = await Auth.findOne({ userid })
    const hashedPassword = auth.password
    const result = await bcrypt.compare(password, hashedPassword)
    if (result === true) {
      res.cookie('userid', userid)
      res.status(200).json('logged in')
    } else {
      res.status(404).json('not found')
    }
  } catch (err) {
    console.log(err)
  }
})

router.get('/logout', authenticated, async (req, res) => {
  try {
    res.clearCookie('userid')
    res.status(200).json('logged out')
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
