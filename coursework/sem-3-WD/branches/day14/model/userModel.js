const User = require("./User");

const hidden = "-_id -__v";

const getAll = async () => User.find().select(hidden).lean();

const getById = async (id) => User.findOne({ id }).select(hidden).lean();

const save = async (newUser) => {
    const last = await User.findOne().sort({ id: -1 }).select("id").lean();
    const newId = last ? last.id + 1 : 1;
    await User.create({ ...newUser, id: newId });
    return getById(newId);
};

const update = async (id, updatedData) => {
    const { id: ignored, passwordHash: ignoredPasswordHash, ...data } = updatedData;
    return User.findOneAndUpdate({ id }, data, { new: true, runValidators: true })
        .select(hidden)
        .lean();
};

const deleteUser = async (id) => {
    const result = await User.deleteOne({ id });
    return result.deletedCount > 0;
};

module.exports = { getAll, getById, save, update, delete: deleteUser };
