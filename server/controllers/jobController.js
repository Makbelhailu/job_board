const mongoose = require("mongoose");
const JobList = require("../models/jobModel");
const User = require("../models/userModel");
const companyInfo = require("../middlewares/clerkMiddleware");

// get all data
const getAllJobs = async (req, res) => {
  const page = parseInt(req.query.page, 10);
  const limit = 12;
  const skip = (page - 1) * limit;

  console.log(page);
  try {
    const jobList = await JobList.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    if (!jobList) {
      return res.status(400).json({ error: "error fetching all the jobs" });
    }

    const companyIds = jobList.map((job) => job.companyId);
    const users = await User.find({ userId: { $in: companyIds } });

    const userMap = users.reduce((map, user) => {
      map[user.userId] = user;
      return map;
    }, {});

    const fullList = jobList.map((job) => ({
      ...job._doc,
      username: userMap[job.companyId].username,
      profile: userMap[job.companyId].profile,
    }));

    res.status(200).json(fullList);
    console.log("all jobs fetched");
  } catch (err) {
    console.error("job fetch error: ", err);
    return res.status(500).json({ error: "internal server error" });
  }
};

//get a single job
const getJob = async (req, res) => {
  const { id } = req.body;

  const joblist = await JobList.find({ companyId: id });

  if (!joblist) {
    return res.status(400).json({ error: "error fetching the jobs" });
  }
  res.status(200).json(joblist);
  console.log("a job is fetched");
};

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
    vacancy,
  } = req.body;
  try {
    // let userInfo = await companyInfo(job.companyId);
    const joblist = await JobList.create({
      // profile: userInfo.imageUrl,
      // username: userInfo.username,
      title,
      type,
      company,
      location,
      salary,
      description,
      requirements,
      vacancy,
    });
    res.status(200).json(joblist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a job
const updateJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid id" });
  }

  const joblist = await JobList.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!joblist) {
    return res.status(400).json({ error: "error updating the job" });
  }
  res.status(200).json(joblist);
  console.log("a job is updated");
};

// delete a job
const deleteJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid id" });
  }

  const joblist = await JobList.findOneAndDelete({ _id: id });

  if (!joblist) {
    return res.status(400).json({ error: "error deleting the job" });
  }
  res.status(200).json(joblist);
  console.log("a job is deleted");
};

module.exports = {
  getAllJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob,
};
