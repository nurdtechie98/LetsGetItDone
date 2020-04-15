const router = require('express').Router()
const UserModel = require('../models/user.model')
const { ageValidation } = require('../utils/middleware')

// CREATE route
router.post('/', ageValidation, async (req, res, next) => {
  try {
    const { name, email, age } = req.body
    const user = new UserModel({ name, email, age })
    await user.save()
    res.status(200).json({
      name, email, age, id: user._id.toString()
    })
  } catch (error) {
    next(error)
  }
})

// READ - specifid resource route
router.get('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const user = await UserModel.findById(userId)
    res.status(201).json({ user })
  } catch (error) {
    next(error)
  }
})

// READ route
router.get('/', async (req, res, next) => {
  try {
    const users = await UserModel.find({})
    res.status(201).json({ users })
  } catch (error) {
    next(error)
  }
})

// UPDATE route
router.put('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const updatedUser = await UserModel.findByIdAndUpdate(userId, { ...req.body }, { new: true })
    res.status(201).json({ user: updatedUser })
  } catch (error) { next(error) }
})

// DELETE route
router.delete('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    await UserModel.findByIdAndRemove(userId)
    res.status(204).end()
  } catch (error) { next(error) }
})

module.exports = router
