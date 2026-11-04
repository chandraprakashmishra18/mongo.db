// require("dotenv").config();

// const { MongoClient } = require("mongodb");

// const client = new MongoClient(process.env.MONGODB_URI);

// let db;

// const connectDB = async () => {
//     try {
//         await client.connect();
//         db = client.db("express_wd");
//         console.log("MongoDB database selected: express_wd");
//     } catch (error) {
//         console.error("MongoDB connection failed:", error);
//         throw error;
//     }
// };

// const getDB = () => {
//     if (!db) {
//         throw new Error("Database is not connected");
//     }

//     return db;
// };

// module.exports = {
//     connectDB,
//     getDB
// };



require("dotenv").config();

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

let db;

const connectDB = async () => {
    try {
        await client.connect();
        db = client.db("express_wd");
        console.log("MongoDB database selected: express_wd");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        throw error;
    }
};

const getDB = () => {
    if (!db) {
        throw new Error("Database is not connected");
    }

    return db;
};

module.exports = {
    connectDB,
    getDB
};

