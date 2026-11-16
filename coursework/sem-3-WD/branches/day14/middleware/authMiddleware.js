const jwt = require("jsonwebtoken");
const User = require('../model/User');
const protect = (req, res, next) => {
    try{
        const token = req.
    }
    // const [scheme, token] = (req.headers.authorization || "").split(/\s+/);
    // if (scheme !== "Bearer" || !token) {
    //     return res.status(401).json({ message: "Authentication required" });
    // }
    // if (!process.env.JWT_SECRET) {
    //     return res.status(500).json({ message: "Authentication is not configured" });
    // }

    // try {
    //     req.user = jwt.verify(token, process.env.JWT_SECRET);
    //     return next();
    // } catch {
    //     return res.status(401).json({ message: "Invalid or expired token" });
    // }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if(!user){
        return res.status(401).json({message: 'Not authorized,usernot found'});
    }
    req.user = user;
    next();
};

module.exports = { protect };
