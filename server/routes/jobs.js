const express = require('express')
const router = express.Router()
const {
  getAllJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob
} = require('../controllers/jobController')

router.get('/', getAllJobs)

router.post('/', createJob)

router.get('/:id', getJob)

router.delete('/:id', deleteJob)

router.patch('/:id', updateJob)


module.exports = router
