const mongoose = require('mongoose');

// ⚠️ Import the Tour model from the model folder
const Tour = require('./model/tour'); 

async function connectDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/tour&travel');
        console.log('MongoDB connected successfully!');
        
        // Call the function after connecting
        await createTour(); 

    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }
}

async function createTour() {
    try {
        // Create a document using the tourSchema
        const newTour = await Tour.create({
            name: "Mountain Hiking",
            description: "Explore the beautiful mountains.",
            destination: "Manali",
            duration: "5 days"
        });
        console.log("Tour saved successfully:", newTour);
    } catch (error) {
        console.log("Error saving tour:", error.message);
    }
}


// Run the connection
connectDB();