const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appilcationSchema = new Schema(
  {
    userId: {
      type: String,
      ref: "User",
      required: true,
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobList",
      required: true,
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: Number,
      required: [true, "Phone number is required"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
    },
    education: {
      type: String,
      required: [true, "Level of Education is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    coverLetter: {
      type: String,
      required: [true, "Cover letter is required."],
    },
    linkedin: String,
    portfolio: String,
    resume: String,
    resumeUrl: String,
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("application", appilcationSchema);
