const express = require('express')
const router = express.Router()

// POST /api/auth/register
router.post('/register', (req, res) => {
  res.json({ message: 'Register route placeholder' })
})

// POST /api/auth/login
router.post('/login', (req, res) => {
  res.json({ message: 'Login route placeholder' })
})

module.exports = router
