const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const register = async (req, res) => {
  const { name, email, password, role } = req.body

  if (!name || !email || !password)
    return res.status(400).json({ message: 'Name, email, and password are required' })

  if (password.length < 6)
    return res.status(400).json({ message: 'Password must be at least 6 characters' })

  try {
    const existing = await User.findOne({ email })
    if (existing)
      return res.status(409).json({ message: 'User already exists with this email' })

    const hashed = await bcrypt.hash(password, 10)
    await User.create({ name, email, password: hashed, role: role || 'citizen' })

    res.status(201).json({ message: 'Account created successfully' })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password)
    return res.status(400).json({ message: 'Email and password are required' })

  try {
    const user = await User.findOne({ email })
    if (!user)
      return res.status(401).json({ message: 'Invalid email or password' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid email or password' })

    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

module.exports = { register, login }
