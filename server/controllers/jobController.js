const mongoose = require("mongoose");
const JobList = require("../models/jobModel");
const User = require("../models/userModel");
const companyInfo = require("../middlewares/clerkMiddleware");

// get all data
const getAllJobs = async (req, res) => {
  const page = parseInt(req.query.page, 10);
  const limit = 13;
  const skip = (page - 1) * 12;

  console.log(page);
  try {
    const jobList = await JobList.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    if (!jobList) {
      return res.status(400).json({ error: "error fetching all the jobs" });
    }

    const fullList = await companyInfo(jobList);

    res.status(200).json({ status: true, jobs: fullList });
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
  res.status(200).json({ status: true, job: joblist });
  console.log("a job is fetched");
};

// post jobs
const createJob = async (req, res) => {
  try {
    const {
      title,
      sector,
      type,
      experience,
      salary,
      applicant,
      vacancy,
      location,
      description,
      requirement,
      responsibility,
      deadline,
      link,
      companyId,
    } = req.body;
    // let userInfo = await companyInfo(job.companyId);
    const joblist = await JobList.create({
      title,
      sector,
      type,
      experience,
      salary,
      applicant,
      vacancy,
      location,
      description,
      requirement,
      responsibility,
      deadline,
      link,
      companyId,
    });
    res.status(200).json({ status: true, job: joblist });
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
  res.status(200).json({ status: true, job: joblist });
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
  res.status(200).json({ status: true, job: joblist });
  console.log("a job is deleted");
};

const getTitles = async (req, res) => {
  try {
    const search = req.query.title;

    const titles = await JobList.distinct("title", {
      title: { $regex: search, $options: "i" },
    });
    const limitedTitles = titles.splice(0, 5);

    res.json(limitedTitles);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: false, error: "Can't fetch titles" });
  }
};

const searchJob = async (req, res) => {
  try {
    const search = req.query.title;
    const page = parseInt(req.query.page, 10);
    const limit = 13;
    const skip = (page - 1) * 12;

    const jobs = await JobList.find({
      title: { $regex: search, $options: "i" },
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    if (!jobs) {
      return res.status(400).json({ error: "error fetching searched jobs" });
    }

    const fullList = await companyInfo(jobs);
    res.json({ status: true, jobs: fullList });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: false, error: "Internal server error" });
  }
};

const filterJobs = async (req, res) => {
  try {
    const { countries, sectors, type, search = "" } = req.query;
    const page = parseInt(req.query.page, 10);
    const limit = 13;
    const skip = (page - 1) * 12;
    const query = {};

    if (search) query.title = { $regex: search, $options: "i" };
    if (countries && countries.length > 0) {
      const countryArray = countries.split(",");
      const regexCountry = countryArray.map((country) => new RegExp(country));
      query.location = { $in: regexCountry };
    }

    // Filter by sectors
    if (sectors && sectors.length > 0) {
      query.sector = { $in: sectors.split(",") };
    }

    // Filter by salary ranges
    if (type && type.length > 0) {
      query.type = { $in: type.split(",") };
    }

    const jobs = await JobList.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    if (!jobs) {
      return res.status(400).json({ error: "error fetching filtered jobs" });
    }

    const fullList = await companyInfo(jobs);
    res.json({ status: true, jobs: fullList });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  getAllJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob,
  getTitles,
  searchJob,
  filterJobs,
};
