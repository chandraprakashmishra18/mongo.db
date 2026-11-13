const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/Auth");

const app = express();

app.use(express.json());
app.use(cors());

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/ppt_31");
        console.log("MongoDB connected");
    }catch (error){
        console.log("MongoDB connection failed", error.message);
    }
};
connectDB();
app.use("/", authRouter);

app.listen(3000, () => console.log("Server running on port 3000"));
