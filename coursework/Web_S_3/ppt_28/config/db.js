const mongoose = require("mongoose");
const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/ppt_28");
        console.log("Database connected locally");
    } catch (err) {
        console.error("Database connection faild:", err.message);
        process.exit(1);
    }
};
module.exports = connectDB;