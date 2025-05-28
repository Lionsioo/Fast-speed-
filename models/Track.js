const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  location: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Track', trackSchema);
