const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob,
  getTitles,
  searchJob,
} = require("../controllers/jobController");

router.get("/", getAllJobs);

// router.get("/:id", getJob);

router.get("/getTitles", getTitles);

router.get("/search", searchJob);

router.post("/", createJob);

router.delete("/:id", deleteJob);

router.patch("/:id", updateJob);

module.exports = router;
