const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB Connected: Successfully");
    }
    catch (err) {
        console.error("Mongodb connection failed.", err.message);
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
