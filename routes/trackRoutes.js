const express = require('express');
const router = express.Router();
const trackController = require('../controllers/trackController');

router.post('/', trackController.addTrack);
router.get('/', trackController.getAllTracks);

module.exports = router;
