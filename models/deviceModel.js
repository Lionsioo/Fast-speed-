const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  os: String,
  version: String
}, { timestamps: true });

module.exports = mongoose.model('Device', deviceSchema);
