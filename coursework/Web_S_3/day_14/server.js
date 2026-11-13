const express = require("express");
const connectDB = require("./config/db")
const Student = require("./models/Student");

const app = express();

connectDB();

app.listen(3000, () => {
    console.log("Server Running");

    saveTestData();
});

async function saveTestData() {
    try{
        await Student.create({
            name: "Test User",
            age:20,
            course: "BCA"
        });
        console.log("✅Test data saved to database");
    } catch(error) {
        console.log("Error saving data:", error);
    }
}

