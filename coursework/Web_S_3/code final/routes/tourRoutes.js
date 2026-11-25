const express = require('express');
const router = express.Router();

const tourController = require('../controller/tourController');
// 1. Fixed typo: 'restricTo' -> 'restrictTo'
const { protect, restrictTo } = require('../middleware/authMiddleware');

// GET all tours
router.get('/tours', tourController.getAllTours);

// GET tours by search query
router.get('/tours/search', tourController.getToursByQuery);

// GET tour by ID
router.get('/tours/:id', tourController.getTourById);

// CREATE tour (Protected)
// 2. Fixed syntax: added the missing comma before tourController.saveTours
router.post('/tours', protect, restrictTo('admin', 'superadmin'), tourController.saveTours);

// UPDATE tour (Protected)
// 3. Added restrictTo here as well so only admins can update
router.put('/tours/:id', protect, restrictTo('admin', 'superadmin'), tourController.updateTour);

// DELETE tour (Protected)
// 3. Added restrictTo here as well so only admins can delete
router.delete('/tours/:id', protect, restrictTo('admin', 'superadmin'), tourController.deleteTourbyID);

module.exports = router;