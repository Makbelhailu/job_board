const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = New Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  salary: {
    type: Stirng,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: {
    type: String,
    required: true
  },
  vacancy: {
    type: Number,
    required: true
  }
}, { timestamps: true})


module.exports = mongoose.model('JobList', jobSchema)
