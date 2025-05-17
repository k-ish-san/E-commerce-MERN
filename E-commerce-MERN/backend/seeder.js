const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const products = require("./data/products");

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// Function to seed the data
const seedData = async () => {
    try {
        // Clear existing data
        await Product.deleteMany();
        await User.deleteMany();

        // Create default admin user
        const createdUser = new User.create({
            name: "Admin",
            email: "admin@example.com",
            password: "password",
            role: "admin",
        });

        // Assign the default admin user ID to each products
        const userID = createdUser._id;

        const sampleProducts = products.map((product) => {
            return { ...product, userID }
        });

        //Insert the products into the database
        await Product.insertMany(sampleProducts);
        

        
    } catch (error) {
        console.error("Error seeding data:", error);
    }
