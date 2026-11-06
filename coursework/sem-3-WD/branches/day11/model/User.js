const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [2, "Name must be at least 2 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
    }
});

module.exports = mongoose.model("User", userSchema);


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false
    }

}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;

