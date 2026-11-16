require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { dbName: "express_wd" });
        console.log("MongoDB connected: express_wd");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }
};

// Temporary: jab tak userModel.js native driver use karta hai
const getDB = () => mongoose.connection.db;

module.exports = { connectDB, getDB };
