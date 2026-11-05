const express = require("express");
const {
    getAllPackages, getPackageById, createPackage, updatePackage, deletePackage
} = require("../controller/tourController");

const router = express.Router();

router.route("/").get(getAllPackages).post(createPackage);
router.route("/:id").get(getPackageById).put(updatePackage).delete(deletePackage);

module.exports = router;
