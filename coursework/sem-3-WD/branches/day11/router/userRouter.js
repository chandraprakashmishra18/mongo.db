const express = require('express');

const {
    getAll,
    getById,
    save,
    update,
    deleteUser
} = require('../controller/userController');

const express = require('express');
const router = express.Router();

const {
    save,
    loginUser,
    getAll,
    getById,
    update,
    deleteUser
} = require('../controller/userController');

// Register
router.post('/register', save);

// Login
router.post('/login', loginUser);

// Get all users
router.get('/', getAll);

// Get user by ID
router.get('/:id', getById);

// Update user
router.put('/:id', update);

// Delete user
router.delete('/:id', deleteUser);

module.exports = router;

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', save);
router.put('/:id', update);
router.delete('/:id', deleteUser);

module.exports = router;
