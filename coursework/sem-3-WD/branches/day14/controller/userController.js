const userModel = require("../model/userModel");

const handleError = (res, error) => {
    if (error.code === 11000) {
        return res.status(400).json({ message: "Email already exists" });
    }
    const status = error.name === "ValidationError" ? 400 : 500;
    res.status(status).json({ message: error.message });
};

const getAll = async (req, res) => {
    try {
        res.json(await userModel.getAll());
    } catch (error) {
        handleError(res, error);
    }
};

const getById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ message: "Invalid id" });

        const user = await userModel.getById(id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        handleError(res, error);
    }
};

const save = async (req, res) => {
    try {
        const user = await userModel.save(req.body);
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        handleError(res, error);
    }
};

const update = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ message: "Invalid id" });

        const user = await userModel.update(id, req.body);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json({ message: "User updated successfully", user });
    } catch (error) {
        handleError(res, error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ message: "Invalid id" });

        const deleted = await userModel.delete(id);
        if (!deleted) return res.status(404).json({ message: "User not found" });
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = { getAll, getById, save, update, deleteUser };
