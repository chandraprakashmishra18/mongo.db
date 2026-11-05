require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./model/User");
const users = require("./data/user.json").filter((u) => u.id);

const run = async () => {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: "express_wd" });

    if ((await User.countDocuments()) > 0) {
        console.log("users collection already has data, seeding skipped");
    } else {
        await User.insertMany(users);
        console.log(`Seeded ${users.length} users`);
    }
    await mongoose.disconnect();
};

run().catch((err) => {
    console.error(err.message);
    process.exit(1);
});
