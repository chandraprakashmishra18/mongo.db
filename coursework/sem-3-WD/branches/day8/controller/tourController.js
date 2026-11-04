const tourModel = require('../model/tourModel');

const getAllPackages = async (req, res) => {
    const packages = await tourModel.getAll();
    res.json(packages);
};

const getPackageById = async (req, res) => {
    const id = Number(req.params.id);
    const package = await tourModel.getById(id);

    if (package) {
        res.json(package);
    } else {
        res.status(404).json({ message: 'Package not found' });
    }
};

const createPackage = async (req, res) => {
    const newPackage = await tourModel.save(req.body);

    res.status(201).json({
        message: 'Package created successfully',
        package: newPackage
    });
};

const updatePackage = async (req, res) => {
    const id = Number(req.params.id);
    const updatedPackage = await tourModel.update(id, req.body);

    if (updatedPackage) {
        res.json({
            message: 'Package updated successfully',
            package: updatedPackage
        });
    } else {
        res.status(404).json({
            message: 'Package not found'
        });
    }
};

const deletePackage = async (req, res) => {
    const id = Number(req.params.id);
    const deleted = await tourModel.delete(id);

    if (deleted) {
        res.json({
            message: 'Package deleted successfully'
        });
    } else {
        res.status(404).json({
            message: 'Package not found'
        });
    }
};

module.exports = {
    getAllPackages,
    getPackageById,
    createPackage,
    updatePackage,
    deletePackage
};
