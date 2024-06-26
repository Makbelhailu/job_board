const mongoose = require('mongoose')
const JobList = require('../models/jobModel')

// get all data
const getAllJobs = async (req, res) => {
  const joblist = await JobList.find({}).sort({createdAt: -1})

  if (!joblist){
    return res.status(400).json({error: "error fetching all the jobs"})
  }
  res.status(200).json(joblist)
  console.log("all jobs fetched");
}

//get a single job
const getJob = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "invalid id"})
  }

  const joblist = await JobList.findById(id)

  if (!joblist){
    return res.status(400).json({error: "error fetching the jobs"})
  }
  res.status(200).json(joblist)
  console.log("a job is fetched");
}

// post jobs
const createJob = async (req, res) => {
  const {
    title,
    type,
    company,
    location,
    salary,
    description,
    requirements,
    vacancy
  } = req.body
  try {
    const joblist = await JobList.create({
      title,
      type,
      company,
      location,
      salary,
      description,
      requirements,
      vacancy
    })
    res.status(200).json(joblist)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// update a job
const updateJob = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "invalid id"})
  }

  const joblist = await JobList.findOneAndUpdate({_id: id}, {...req.body})

  if (!joblist){
    return res.status(400).json({error: "error updating the job"})
  }
  res.status(200).json(joblist)
  console.log("a job is updated");
}

// delete a job
const deleteJob = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "invalid id"})
  }

  const joblist = await JobList.findOneAndDelete({_id: id})

  if (!joblist){
    return res.status(400).json({error: "error deleting the job"})
  }
  res.status(200).json(joblist)
  console.log("a job is deleted");

}

module.exports = {
  getAllJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob
}
