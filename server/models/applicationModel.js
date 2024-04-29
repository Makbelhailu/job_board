const mongoose = require('mongoose')

const Schema = mongoose.Schema

const appilcationSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobList"
  },
  letter: String,
  resumeUrl: String
}, {timestamps: true})

module.exports = mongoose.model("application", appilcationSchema)
