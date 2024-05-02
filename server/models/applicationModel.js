const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appilcationSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobList",
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    letter: String,
    resumeUrl: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("application", appilcationSchema);
