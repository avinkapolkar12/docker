const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const seedProducts = [
  {
    name: "Laptop",
    price: 999.99,
    image: "https://via.placeholder.com/300x200",
    description: "High-performance laptop for work and gaming",
    category: "Electronics",
    stock: 10
  },
  {
    name: "Smartphone",
    price: 699.99,
    image: "https://via.placeholder.com/300x200",
    description: "Latest smartphone with advanced features",
    category: "Electronics",
    stock: 15
  },
  {
    name: "Headphones",
    price: 199.99,
    image: "https://via.placeholder.com/300x200",
    description: "Wireless noise-cancelling headphones",
    category: "Electronics",
    stock: 20
  },
  {
    name: "Running Shoes",
    price: 129.99,
    image: "https://via.placeholder.com/300x200",
    description: "Comfortable running shoes for athletes",
    category: "Sports",
    stock: 25
  },
  {
    name: "Coffee Maker",
    price: 89.99,
    image: "https://via.placeholder.com/300x200",
    description: "Automatic coffee maker with timer",
    category: "Home",
    stock: 12
  },
  {
    name: "Book - JavaScript Guide",
    price: 29.99,
    image: "https://via.placeholder.com/300x200",
    description: "Complete guide to modern JavaScript",
    category: "Books",
    stock: 30
  }
];

const seedDatabase = async () => {
  try {
    // Check if mongoose is already connected
    if (mongoose.connection.readyState !== 1) {
      const mongoURI = process.env.MONGODB_URI || 'mongodb://mongo:27017/ecommerce';
      await mongoose.connect(mongoURI);
      console.log('Connected to MongoDB for seeding...');
    } else {
      console.log('Using existing MongoDB connection for seeding...');
    }
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert seed products
    await Product.insertMany(seedProducts);
    console.log('Seed products inserted successfully');
    
    // Only close connection if this file is run directly (not from server.js)
    if (require.main === module) {
      await mongoose.connection.close();
      console.log('Database seeding completed');
    } else {
      console.log('Database seeding completed (keeping connection open)');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
    if (require.main === module) {
      process.exit(1);
    } else {
      throw error; // Re-throw for the server to handle
    }
  }
};

// Run seeding if this file is executed directly
if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;
