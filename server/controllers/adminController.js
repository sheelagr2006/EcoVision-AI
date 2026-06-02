const User = require('../models/User')
const Report = require('../models/Report')

const getStats = async (req, res) => {
  try {
    const [totalUsers, totalReports, pending, inReview, resolved] = await Promise.all([
      User.countDocuments(),
      Report.countDocuments(),
      Report.countDocuments({ status: 'pending' }),
      Report.countDocuments({ status: 'in-review' }),
      Report.countDocuments({ status: 'resolved' }),
    ])
    res.json({ totalUsers, totalReports, pending, inReview, resolved })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find()
      .populate('submittedBy', 'name email')
      .sort({ createdAt: -1 })
    res.json(reports)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 })
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const updateReportStatus = async (req, res) => {
  try {
    const { status } = req.body
    if (!['pending', 'in-review', 'resolved'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' })
    }
    const report = await Report.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).populate('submittedBy', 'name email')
    if (!report) return res.status(404).json({ message: 'Report not found' })
    res.json(report)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = { getStats, getAllReports, getAllUsers, updateReportStatus }
