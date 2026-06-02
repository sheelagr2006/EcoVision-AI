const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema(
  {
    image: { type: String, default: '' },
    category: {
      type: String,
      enum: ['Illegal Dumping', 'Air Pollution', 'Water Pollution', 'Deforestation', 'Noise Pollution', 'Other'],
      required: true,
    },
    description: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, enum: ['pending', 'in-review', 'resolved'], default: 'pending' },
    submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Report', reportSchema)
