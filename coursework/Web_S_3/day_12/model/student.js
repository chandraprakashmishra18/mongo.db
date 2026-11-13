const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A student must have a name']
    },
    age: {
        type: Number,
        required: true
    },
    course: {
        type: String
    }
});

// Create the Model
const Student = mongoose.model('Student', StudentSchema);

// ⚠️ THIS LINE IS CRUCIAL: It exports the model so index.js can use it
module.exports = Student; 