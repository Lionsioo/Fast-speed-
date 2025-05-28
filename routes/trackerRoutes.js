const express = require('express');
const router = express.Router();
const trackerController = require('../controllers/trackerController');

router.post('/', trackerController.trackUser);

module.exports = router;
