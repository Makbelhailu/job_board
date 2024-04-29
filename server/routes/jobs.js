const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({msg: "hi mak"})
})

router.post('/', (req, res) => {
  res.send("this is post request")
})

router.get('/:id', (req, res) => {
  res.send(`this is get request for id=${req.params.id}`)
})

router.delete('/:id', (req, res) => {
  res.send(`this is delete request for id=${req.params.id}`)
})

router.patch('/:id', (req, res) => {
  res.send(`this is patch or update request for id=${req.params.id}`)
})


module.exports = router
