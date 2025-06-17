const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;


// {
//   "version": 2,
//   "name": "backend",
//   "builds": [{ "src": "server.js", "use": "@vercel/node" }],
//   "routes": [{ "src": "/*", "dest": "server.js" }]
// }
