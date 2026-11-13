const express = require('express');
const router = express.Router();

const tourController = require('../controller/tourController');
// 1. Changed this line to destructure 'protect' out of the middleware
const { protect } = require('../middleware/authMiddleware');

// GET all tours
router.get('/tours', tourController.getAllTours);

// GET tours by search query
router.get('/tours/search', tourController.getToursByQuery);

// GET tour by ID
router.get('/tours/:id', tourController.getTourById);

// CREATE tour
// 2. Changed 'authMiddleware' to 'protect' here
router.post('/tours', protect, tourController.saveTours);

// UPDATE tour
router.put('/tours/:id', tourController.updateTour);

// DELETE tour
router.delete('/tours/:id', tourController.deleteTourbyID);

module.exports = router;