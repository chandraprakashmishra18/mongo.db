const jwt = require('jsonwebtoken');
const User = require('../model/User'); // Make sure this path is correct for your project

// 1. Protect Middleware (Checks if user is logged in)
const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Check if user still exists in the database
            const currentUser = await User.findById(decoded.id).select('-password');

            if (!currentUser) {
                return res.status(401).json({
                    message: 'Not authorized, user no longer exists'
                });
            }

            // Grant access: attach the user to the request object
            req.user = currentUser;
            
            // Move to the next middleware or route handler
            return next(); 

        } catch (error) {
            return res.status(401).json({
                message: 'Not authorized, token failed'
            });
        }
    }

    if (!token) {
        return res.status(401).json({
            message: 'Not authorized, no token'
        });
    }
};

// 2. RestrictTo Middleware (Checks user roles)
// Usage: restrictTo('admin', 'lead-guide')
const restrictTo = (...roles) => {
    return (req, res, next) => {
        // req.user is available because 'protect' runs before this
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: 'You do not have permission to perform this action'
            });
        }
        next();
    };
};

module.exports = { protect, restrictTo };