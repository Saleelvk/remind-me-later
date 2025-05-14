const express = require('express');
const router = express.Router();
const { createReminder } = require('../controllers/reminderController');

// POST endpoint to create a reminder
router.post('/create', createReminder);

module.exports = router;
