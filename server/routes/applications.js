const express = require("express");
const router = express.Router();
const {
  getAllApplications,
  getApplication,
  createApplication,
  updateApplication,
  deleteApplication,
} = require("../controllers/applicationController");

const { uploadMiddleware } = require("../middlewares/awsMiddleware");

// router.get('/', getAllApplications)
router.get("/", getApplication);
router.post("/", uploadMiddleware("resume"), createApplication);
router.patch("/:id", updateApplication);
router.delete("/:id", deleteApplication);

module.exports = router;
