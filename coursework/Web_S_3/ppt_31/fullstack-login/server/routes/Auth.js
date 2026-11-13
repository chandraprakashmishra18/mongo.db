const express = require("express");
const router = express.Router();
const {loginUser, updateMarks} = require("../controllers/authController");


router.post("/login", loginUser);
router.post("/updatemarks", updateMarks); //ppt_32

module.exports = router;
