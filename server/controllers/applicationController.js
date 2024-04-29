const mongoose = require('mongoose')
const App = require('../models/applicationModel')

//get all the applications
const getAllApplications = async (req, res) => {
  const app = await App.find({}).sort({createdAt: -1})

  if (!app) {
    return res.status(400).json({error: "error fetching applications"})
  }
  res.status(200).json(app)

}

//get a singel application
const getApplication = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "invalid id"})
  }
  const app = await App.findById({_id: id})

  if (!app) {
    res.status(400).json({error: "error getting the application"})
  }
  res.status(200).json(app)
}

//create application
const createApplication = async (req, res) => {
  const {userId, jobId, letter, resume} = req.body
  const resumeUrl = resume.fileName
  try {
    const app = await App.create({userId, jobId, letter, resumeUrl})
    res.status(200).json(app)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

//update application
const updateApplication = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "invalid id"})
  }
  const app = await App.findOneAndUpdate({_id: id},
     {...req.body})

  if (!app) {
    res.status(400).json({error: "error updating the application"})
  }
  res.status(200).json(app)
}

//delete application
const deleteApplication = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "invalid id"})
  }
  const app = await App.findOneAndDelete({_id: id})

  if (!app) {
    res.status(400).json({error: "error deleting the application"})
  }
  res.status(200).json(app)
}

module.exports = {
  getAllApplications,
  getApplication,
  createApplication,
  updateApplication,
  deleteApplication
}
