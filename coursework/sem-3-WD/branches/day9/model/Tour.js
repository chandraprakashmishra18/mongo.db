const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters long"],
        maxLength: [100, "Name must be at most 100 characters long"]
    },
    destination: { type: String, required: [true, "Destination is required"], trim: true },
    days: { type: Number, required: [true, "Days is required"], min: [1, "Days must be at least 1"] },
    price: { type: Number, required: [true, "Price is required"], min: [0, "Price cannot be negative"] }
});

module.exports = mongoose.model("Tour", tourSchema);
