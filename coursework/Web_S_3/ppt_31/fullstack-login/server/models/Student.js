//ppt_32
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    rollNo: { type: String, required: true},
    marks: { type: Number, default:0}
});
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;