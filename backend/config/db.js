const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Remind");
    console.log("MongoDB is connected");
  } catch (err) {
    console.error('Database connection error:', err.message || err);

  }
}; 

module.exports= connectDb
