const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://dhwaneel9913:123@cluster0.9vdpe9r.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
      await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;