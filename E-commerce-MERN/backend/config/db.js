const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      console.log("MONGO_URI:", process.env.MONGO_URI); // TEMP log
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB Connected: Successfully");
    }
    catch (err) {
        console.error("Mongodb connection failed.", err.message);
        process.exit(1);
        
    }
};

module.exports = connectDB; 
