const express = require('express')
const router = express.Router()

// GET /api/reports
router.get('/', (req, res) => {
  res.json({ message: 'Get all reports placeholder' })
})

// POST /api/reports
router.post('/', (req, res) => {
  res.json({ message: 'Create report placeholder' })
})

// GET /api/reports/:id
router.get('/:id', (req, res) => {
  res.json({ message: `Get report ${req.params.id} placeholder` })
})

module.exports = router
