const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/day_14";

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Database Connected");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
module.exports = connectDB;