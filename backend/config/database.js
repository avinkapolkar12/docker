const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://mongo:27017/ecommerce';
    
    console.log('Attempting to connect to MongoDB:', mongoURI);
    
    await mongoose.connect(mongoURI);

    console.log('MongoDB connected successfully');
    
    // Skip index creation for now - will be created automatically by Mongoose
    console.log('Skipping manual index creation - Mongoose will handle indexes');
    
  } catch (error) {
    console.error('MongoDB connection error:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      code: error.code
    });
    
    // Don't exit in production, retry connection
    if (process.env.NODE_ENV !== 'production') {
      process.exit(1);
    } else {
      console.log('Retrying connection in 5 seconds...');
      setTimeout(connectDB, 5000);
    }
  }
};

// Handle connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});

module.exports = connectDB;
