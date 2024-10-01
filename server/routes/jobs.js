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
  filterJobs,
} = require("../controllers/jobController");

router.get("/", getAllJobs);

router.get("/getTitles", getTitles);

router.get("/search", searchJob);

router.get("/filter", filterJobs);

router.post("/", createJob);

router.delete("/:id", deleteJob);

router.patch("/:id", updateJob);

module.exports = router;
