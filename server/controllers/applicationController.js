const mongoose = require("mongoose");
const App = require("../models/applicationModel");

//get all the applications
const getAllApplications = async (req, res) => {
  const app = await App.find({})
    .sort({ createdAt: -1 })
    .populate(["userId", "jobId"])
    .then((posts) => posts)
    .catch((err) => console.error(err));

  if (!app) {
    return res.status(400).json({ error: "error fetching applications" });
  }

  res.status(200).json(app);
};

//get a singel application
const getApplication = async (req, res) => {
  const { userId, jobId } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid id" });
  }
  const app = await App.findOne({ id: id });

  if (!app) {
    res
      .status(400)
      .json({ status: false, error: "error getting the application" });
  }
  res.status(200).json({ status: true, app });
};

//create application
const createApplication = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      gender,
      education,
      address,
      coverLetter,
      linkedin,
      portfolio,
      jobId,
      userId,
    } = req.body;
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(404).json({ status: false, error: "invalid Job Id" });
    }

    const { originalname, location } = req.file;
    const app = await App.create({
      userId,
      jobId,
      fullName,
      email,
      phone,
      gender,
      education,
      address,
      coverLetter,
      linkedin,
      portfolio,
      resume: originalname,
      resumeUrl: location,
    });
    res.status(200).json({ status: true, app });
  } catch (error) {
    res.status(404).json({ status: false, error: error.message });
  }
};

//update application
const updateApplication = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ status: false, error: "invalid id" });
  }
  const app = await App.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!app) {
    res
      .status(400)
      .json({ status: false, error: "error updating the application" });
  }
  res.status(200).json({ status: true, app });
};

//delete application
const deleteApplication = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid id" });
  }
  const app = await App.findOneAndDelete({ _id: id });

  if (!app) {
    res
      .status(400)
      .json({ status: false, error: "error deleting the application" });
  }
  res.status(200).json({ status: true, app });
};

module.exports = {
  getAllApplications,
  getApplication,
  createApplication,
  updateApplication,
  deleteApplication,
};
