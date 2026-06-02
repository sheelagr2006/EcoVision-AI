const express = require('express')
const router = express.Router()
const { protect, adminOnly } = require('../middleware/auth')
const { getStats, getAllReports, getAllUsers, updateReportStatus } = require('../controllers/adminController')

router.use(protect, adminOnly)

router.get('/stats', getStats)
router.get('/users', getAllUsers)
router.get('/reports', getAllReports)
router.patch('/reports/:id/status', updateReportStatus)

module.exports = router
