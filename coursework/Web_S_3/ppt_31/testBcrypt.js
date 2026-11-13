const bcrypt = require("bcrypt");

async function runTest() {
    const myPassword = "admin123";
    console.log("Original Password:", myPassword);

    const salt = await bcrypt.genSalt(10);
    console.log("Generated Salt: ", salt);

    const hashedPassword = await bcrypt.hash(myPassword, salt);
    console.log("Stored Hash: ", hashedPassword);

    const isMatchCorrect = await bcrypt.compare("admin123", hashedPassword);
    console.log("Typing 'admin123'->", isMatchCorrect);
}
runTest();