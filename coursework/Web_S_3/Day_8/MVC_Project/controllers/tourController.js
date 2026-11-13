const tourModel = require("../model/tourModel");
const getAllTours = (req,res)=>{
    const tours = tourModel.getAll();
    res.json(tours);
}

const getTourByID = (req,res)=>{
    const id = parseInt(req.params.id);
    const tour = tourModel.getByID(id);
    if(tour){
        res.status(200).json(tour);
    } 
    else {
        res.status(404).json({message: "Tour not found"});
    }
}

const createTour =  (req,res)=>{
    const newTour = req.body;
    tourModel.save(newTour);
    res.status(201).json(newTour);
}

const updatedTour = (req,res) => {
    const id =parseInt(req,params.id);
    const updatedTour = req.body;
    tourModel.update(id,updatedTour);
    res.status(200).json({message: 'Tour updated Successfully'});
}

module.exports = {
    getAllTours,
    getTourByID,
    createTour,
    updatedTour
}