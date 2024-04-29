const mongoose = require('mongoose')

const Schema = mongoose.Schema

const appilcationSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Joblists"
  },
  letter: String,
  resumeUrl: String
}, {timestamps: true})

module.exports = mongoose.model("application", appilcationSchema)
