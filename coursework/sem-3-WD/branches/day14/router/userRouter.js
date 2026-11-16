const express = require('express');
const { protect } = require('../middleware/authMiddleware');

const {
    getAll,
    getById,
    save,
    update,
    deleteUser
} = require('../controller/userController');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', protect, save);
router.put('/:id', protect, update);
router.delete('/:id', protect, deleteUser);

module.exports = router;
