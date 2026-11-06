
const User = require('../model/User');
const bcrypt = require('bcrypt');

// Common error handler
const handleError = (res, error) => {
    console.error(error);

    if (error.code === 11000) {
        return res.status(400).json({
            success: false,
            message: 'Email already exists'
        });
    }

    if (error.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

    if (error.name === 'CastError') {
        return res.status(400).json({
            success: false,
            message: 'Invalid ID'
        });
    }

    return res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
};


// 1. REGISTER / CREATE USER
const save = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Name, email and password are required'
            });
        }

        // Check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists'
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });

    } catch (error) {
        handleError(res, error);
    }
};


// 2. LOGIN USER
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required'
            });
        }

        // Find user
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        handleError(res, error);
    }
};


// 3. GET ALL USERS
const getAll = async (req, res) => {
    try {
        const users = await User.find().select('-password');

        res.status(200).json({
            success: true,
            count: users.length,
            users
        });

    } catch (error) {
        handleError(res, error);
    }
};


// 4. GET USER BY ID
const getById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {
        handleError(res, error);
    }
};


// 5. UPDATE USER
const update = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const updateData = {};

        if (name !== undefined) updateData.name = name;
        if (email !== undefined) updateData.email = email;

        // Hash password if it is being updated
        if (password) {
            updateData.password = await bcrypt.hash(password, 10);
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { $set: updateData },
            {
                new: true,
                runValidators: true
            }
        ).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            user
        });

    } catch (error) {
        handleError(res, error);
    }
};


// 6. DELETE USER
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        });

    } catch (error) {
        handleError(res, error);
    }
};


// EXPORT ALL FUNCTIONS
module.exports = {
    save,
    loginUser,
    getAll,
    getById,
    update,
    deleteUser
};
