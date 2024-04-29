const mongoose = require('mongoose')
const User = require('../models/userModel')

// fetch user's data
const getUser = async (req, res) => {
  const user = await User.find({...req.body})
  if (!user) {
    return res.status(400).json({error: "user can not be found"})
  }
  res.status(200).json(user)
}

//add user
const createUser = async (req, res) => {
  const {username, email, password, role} = req.body
  try {
    const user = await User.create({username, email, password, role})
    if (user) {
      res.status(200).json(user)
    }
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

//update user
const updateUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid()) {
    return res.status(404).json({error: "invalid id"})
  }

  const user = await User.findOneAndUpdate({_id: id }, {...req.body})

  if (!user) {
    return res.status(404).json({error: 'error creating user'})
  }
  res.status(200).json(user)
}

//delete user
const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid()) {
    return res.status(404).json({error: "invalid id"})
  }

  const user = await User.findOneAndDelete({_id: id })

  if (!user) {
    return res.status(404).json({error: 'error deleting user'})
  }
  res.status(200).json(user)
}


module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
}
