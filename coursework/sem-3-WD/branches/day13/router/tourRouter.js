const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
    getAllPackages, getPackageById, createPackage, updatePackage, deletePackage
} = require("../controller/tourController");

const router = express.Router();

router.route("/").get(getAllPackages).post(protect, createPackage);
router.route("/:id").get(getPackageById).put(protect, updatePackage).delete(protect, deletePackage);

module.exports = router;
