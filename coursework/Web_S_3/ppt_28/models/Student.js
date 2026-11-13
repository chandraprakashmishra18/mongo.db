const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: String,
        required: true
    },
    age: {
        type:Number,
        min: 17
    }
});
const Student = mongoose.model("Student",StudentSchema);
module.exports = Student;