const userModel = require('../model/userModel');

const getAll = async (req, res) => {
    const users = await userModel.getAll();
    res.json(users);
};

const getById = async (req, res) => {
    const id = Number(req.params.id);
    const user = await userModel.getById(id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
};

const save = async (req, res) => {
    const newUser = await userModel.save(req.body);

    res.status(201).json({
        message: 'User created successfully',
        user: newUser
    });
};

const update = async (req, res) => {
    const id = Number(req.params.id);
    const updatedUser = await userModel.update(id, req.body);

    if (updatedUser) {
        res.json({
            message: 'User updated successfully',
            user: updatedUser
        });
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
};

const deleteUser = async (req, res) => {
    const id = Number(req.params.id);
    const deleted = await userModel.delete(id);

    if (deleted) {
        res.json({
            message: 'User deleted successfully'
        });
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
};

module.exports = {
    getAll,
    getById,
    save,
    update,
    deleteUser
};
