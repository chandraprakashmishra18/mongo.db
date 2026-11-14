const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    const [scheme, token] = (req.headers.authorization || "").split(/\s+/);
    if (scheme !== "Bearer" || !token) {
        return res.status(401).json({ message: "Authentication required" });
    }
    if (!process.env.JWT_SECRET) {
        return res.status(500).json({ message: "Authentication is not configured" });
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        return next();
    } catch {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = { protect };
