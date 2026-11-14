const express = require('express');
const router = express.Router();

const tourController = require('../controller/tourController');
const { protect } = require('../middleware/authMiddleware');

// GET all tours
router.get('/tours', tourController.getAllTours);

// GET tours by search query
router.get('/tours/search', tourController.getToursByQuery);

// GET tour by ID
router.get('/tours/:id', tourController.getTourById);

// CREATE tour (Protected)
router.post('/tours', protect, tourController.saveTours);

// UPDATE tour (Protected)
// Added 'protect' right before the controller
router.put('/tours/:id', protect, tourController.updateTour);

// DELETE tour (Protected)
// Added 'protect' right before the controller
router.delete('/tours/:id', protect, tourController.deleteTourbyID);

module.exports = router;
