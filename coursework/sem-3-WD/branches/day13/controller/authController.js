const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const userModel = require("../model/userModel");

const getSecret = (res) => {
    if (process.env.JWT_SECRET) return process.env.JWT_SECRET;
    res.status(500).json({ message: "Authentication is not configured" });
    return null;
};

const createToken = (id, secret) => jwt.sign({ id }, secret, { expiresIn: "1h" });

const registerUser = async (req, res) => {
    const secret = getSecret(res);
    if (!secret) return;

    try {
        const { name, email, password } = req.body;
        if (![name, email, password].every((value) => typeof value === "string" && value.trim())) {
            return res.status(400).json({ message: "Name, email, and password are required" });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters" });
        }

        const normalizedEmail = email.trim().toLowerCase();
        if (await User.exists({ email: normalizedEmail })) {
            return res.status(409).json({ message: "Email is already registered" });
        }

        const passwordHash = await bcrypt.hash(password, 12);
        const user = await userModel.save({ name: name.trim(), email: normalizedEmail, passwordHash });
        const token = createToken(user.id, secret);
        return res.status(201).json({
            message: "User registered successfully",
            token,
            user: { id: user.id, name: user.name, email: user.email }
        });
    } catch (error) {
        const status = error.code === 11000 ? 409 : error.name === "ValidationError" ? 400 : 500;
        return res.status(status).json({
            message: status === 500 ? "Could not register user" : error.message
        });
    }
};

const loginUser = async (req, res) => {
    const secret = getSecret(res);
    if (!secret) return;

    try {
        const { email, password } = req.body;
        if (typeof email !== "string" || typeof password !== "string" || !email.trim() || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email: email.trim().toLowerCase() })
            .select("+passwordHash")
            .lean();
        if (!user || !user.passwordHash || !(await bcrypt.compare(password, user.passwordHash))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = createToken(user.id, secret);
        return res.json({
            message: "Login successful",
            token,
            user: { id: user.id, name: user.name, email: user.email }
        });
    } catch {
        return res.status(500).json({ message: "Could not log in" });
    }
};

module.exports = { registerUser, loginUser };
