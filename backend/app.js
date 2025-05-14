const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const connectDb = require('./config/db');
const reminderRoutes = require('./routes/reminderRoutes');

dotenv.config(); 
const PORT = process.env.PORT || 3001;
const app = express();

connectDb();

// Middleware
app.use(cors());
app.use(express.json()); 
app.use(cookieParser());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/reminder', reminderRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
