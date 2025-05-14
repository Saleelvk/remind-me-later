const Reminder = require('../models/Reminder');

const createReminder = async (req, res) => {
    try {
        const { date, time, message, method } = req.body;

        if (!date || !time || !message || !method) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const reminder = new Reminder({
            date,
            time,
            message,
            method
        });

        await reminder.save();

        res.status(201).json({
            success: true,
            message: 'Reminder created successfully',
            data: reminder
        });
    } catch (error) {
        console.error('Error creating reminder:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { createReminder };
