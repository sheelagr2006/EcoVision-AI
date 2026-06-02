const express = require('express')
const router = express.Router()

// GET /api/admin/users
router.get('/users', (req, res) => {
  res.json({ message: 'Get all users placeholder' })
})

// GET /api/admin/reports
router.get('/reports', (req, res) => {
  res.json({ message: 'Get all reports (admin) placeholder' })
})

// PATCH /api/admin/reports/:id/status
router.patch('/reports/:id/status', (req, res) => {
  res.json({ message: `Update report ${req.params.id} status placeholder` })
})

module.exports = router
