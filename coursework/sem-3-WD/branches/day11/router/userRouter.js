
const express = require('express');
const router = express.Router();

const {
    getAll,
    getById,
    save,
    loginUser,
    update,
    deleteUser
} = require('../controller/userController');

// Register user
router.post('/register', save);

// Login user
router.post('/login', loginUser);

// Get all users
router.get('/', getAll);

// Get user by ID
router.get('/:id', getById);

// Create user (alternative endpoint)
router.post('/', save);

// Update user
router.put('/:id', update);

// Delete user
router.delete('/:id', deleteUser);

module.exports = router;
