const User = require("../models/User");
const Student = require("../models/Student"); //ppt_32
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    if (user.password !== password) {
        return res.status(401).json({
            message: "Inavild credentials"
        });
    }
    res.status(200).json({
        message: "Authentication successful"
    })
}
//ppt_32
const updateMarks = async (req, res) => {
    const {userId, rollNo, marks} = req.body;

    const user = await User.findById(userId);

    if (!user || user.role !== "teacher") {
        return res.status(403).json({
            message: "only teachers can update marks"
        });
    }

    await Student.updateOne({rollNo}, {marks});

    res.status(200).json({
        message: "Marks Updated successfully"
    });
}
module.exports = { 
    loginUser, 
    updateMarks // ppt_32
};