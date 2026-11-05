const Tour = require("./Tour");

const hidden = "-_id -__v";

const getAll = async () => Tour.find().select(hidden).lean();

const getById = async (id) => Tour.findOne({ id }).select(hidden).lean();

const save = async (newPackage) => {
    const last = await Tour.findOne().sort({ id: -1 }).select("id").lean();
    const newId = last ? last.id + 1 : 1;
    await Tour.create({ ...newPackage, id: newId });
    return getById(newId);
};

const update = async (id, updatedPackage) => {
    const { id: ignored, ...data } = updatedPackage; // id badalne mat do
    return Tour.findOneAndUpdate({ id }, data, { new: true, runValidators: true })
        .select(hidden)
        .lean();
};

const deletePackage = async (id) => {
    const result = await Tour.deleteOne({ id });
    return result.deletedCount > 0;
};

module.exports = { getAll, getById, save, update, delete: deletePackage };
