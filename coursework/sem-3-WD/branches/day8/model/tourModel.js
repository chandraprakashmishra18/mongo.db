const { getDB } = require("../config/db");

const getAll = async () => {
    const db = getDB();

    return await db
        .collection("tours")
        .find({}, { projection: { _id: 0 } })
        .toArray();
};

const getById = async (id) => {
    const db = getDB();

    return await db
        .collection("tours")
        .findOne(
            { id: Number(id) },
            { projection: { _id: 0 } }
        );
};

const save = async (newPackage) => {
    const db = getDB();

    const lastPackage = await db
        .collection("tours")
        .find()
        .sort({ id: -1 })
        .limit(1)
        .toArray();

    const newId = lastPackage.length > 0
        ? lastPackage[0].id + 1
        : 1;

    const packageToSave = {
        ...newPackage,
        id: newId
    };

    await db.collection("tours").insertOne(packageToSave);

    return packageToSave;
};

const update = async (id, updatedPackage) => {
    const db = getDB();

    const result = await db.collection("tours").updateOne(
        { id: Number(id) },
        {
            $set: updatedPackage
        }
    );

    if (result.matchedCount === 0) {
        return null;
    }

    return await getById(id);
};

const deletePackage = async (id) => {
    const db = getDB();

    const result = await db.collection("tours").deleteOne({
        id: Number(id)
    });

    return result.deletedCount > 0;
};

module.exports = {
    getAll,
    getById,
    save,
    update,
    delete: deletePackage
};
