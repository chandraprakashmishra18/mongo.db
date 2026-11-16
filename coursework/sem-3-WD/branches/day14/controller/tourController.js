const tourModel = require("../model/tourModel");

const handleError = (res, error) => {
    const status = error.name === "ValidationError" ? 400 : 500;
    res.status(status).json({ message: error.message });
};

const getAllPackages = async (req, res) => {
    try {
        res.json(await tourModel.getAll());
    } catch (error) {
        handleError(res, error);
    }
};

const getPackageById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ message: "Invalid id" });

        const tour = await tourModel.getById(id);
        if (!tour) return res.status(404).json({ message: "Package not found" });
        res.json(tour);
    } catch (error) {
        handleError(res, error);
    }
};

const createPackage = async (req, res) => {
    try {
        const newPackage = await tourModel.save(req.body);
        res.status(201).json({ message: "Package created successfully", package: newPackage });
    } catch (error) {
        handleError(res, error);
    }
};

const updatePackage = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ message: "Invalid id" });

        const updated = await tourModel.update(id, req.body);
        if (!updated) return res.status(404).json({ message: "Package not found" });
        res.json({ message: "Package updated successfully", package: updated });
    } catch (error) {
        handleError(res, error);
    }
};

const deletePackage = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ message: "Invalid id" });

        const deleted = await tourModel.delete(id);
        if (!deleted) return res.status(404).json({ message: "Package not found" });
        res.json({ message: "Package deleted successfully" });
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = { getAllPackages, getPackageById, createPackage, updatePackage, deletePackage };
