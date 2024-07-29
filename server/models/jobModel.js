const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    type: {
      type: String, // fulltime or partTime
      required: true,
    },
    companyId: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    applicant: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
    vacancy: {
      type: Number,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobList", jobSchema);
