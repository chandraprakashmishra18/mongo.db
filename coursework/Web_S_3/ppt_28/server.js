const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());

connectDB();

app.use("/api", studentRoutes);

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});