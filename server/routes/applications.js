const express = require('express')
const router = express.Router()
const {
  getAllApplications,
  getApplication,
  createApplication,
  updateApplication,
  deleteApplication
} = require('../controllers/applicationController')

router.get('/', getAllApplications)
router.get('/:id', getApplication)
router.post('/', createApplication)
router.patch('/:id', updateApplication)
router.delete('/:id', deleteApplication)

module.exports = router
