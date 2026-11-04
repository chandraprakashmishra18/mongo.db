const { getDB } = require("../config/db");

const getAll = async () => {
    const db = getDB();

    return await db
        .collection("users")
        .find({}, { projection: { _id: 0 } })
        .toArray();
};

const getById = async (id) => {
    const db = getDB();

    return await db
        .collection("users")
        .findOne(
            { id: Number(id) },
            { projection: { _id: 0 } }
        );
};

const save = async (newUser) => {
    const db = getDB();

    const lastUser = await db
        .collection("users")
        .find()
        .sort({ id: -1 })
        .limit(1)
        .toArray();

    const newId = lastUser.length > 0
        ? lastUser[0].id + 1
        : 1;

    const userToSave = {
        ...newUser,
        id: newId
    };

    await db.collection("users").insertOne(userToSave);

    return userToSave;
};

const update = async (id, updatedData) => {
    const db = getDB();

    const result = await db.collection("users").updateOne(
        { id: Number(id) },
        {
            $set: {
                ...updatedData,
                id: Number(id)
            }
        }
    );

    if (result.matchedCount === 0) {
        return null;
    }

    return await getById(id);
};

const deleteUser = async (id) => {
    const db = getDB();

    const result = await db.collection("users").deleteOne({
        id: Number(id)
    });

    return result.deletedCount > 0;
};

module.exports = {
    getAll,
    getById,
    save,
    update,
    delete: deleteUser
};
