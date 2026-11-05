const express = require('express');

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
router.post('/', save);
router.put('/:id', update);
router.delete('/:id', deleteUser);

module.exports = router;
