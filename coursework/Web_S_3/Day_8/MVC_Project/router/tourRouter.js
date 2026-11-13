const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

router.get('/',tourController.getAllTours);
router.get('/:id',tourController.getTourByID);
router.post('/',tourController.create);
router.put("/:id",tourControleer.update)

router.exports = router;