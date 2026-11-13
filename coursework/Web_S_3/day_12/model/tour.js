const mongoose = require('mongoose');

// 1. Define the Schema
const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name']
    },
    description: {
        type: String
    },
    destination: {
        type: String,
        required: true
    },
    duration: {
        type: String
    }
});

// 2. Create the Model
const Tour = mongoose.model('Tour', tourSchema);

// 3. Export it
module.exports = Tour;