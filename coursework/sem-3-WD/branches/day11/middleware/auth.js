const jwt = require("jsonwebtoken");
app.post("/login", async (req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});

    const token = jwt.sign(
        {
            userId: user._id
        },
        "mysecretkey",
        {
            expiresIn: "In"
        }
    );

    res.cookie("token", token);
    res.status(200).json({
        message: "Login Successful"
    });
});