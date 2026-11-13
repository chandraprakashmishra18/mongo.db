const tourModel = require('../models/tourModel');

const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};

const getTourById = (req, res) => {
    const tourId = parseInt(req.params.id);
    const tour = tourModel.getById(tourId);
    if (tour) {
        res.status(200).json(tour);
    } else {
        res.status(404).json({ message: 'Tour not found' });
    }
}
module.exports = {
    getAllTours,
    getTourById
};
       
