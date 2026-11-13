const express = require("express");
const app = express();
const port = 3000;

const tours = require("./tour");

app.get("/", (req, res) => {
    const destination = req.query.des;

    if (!destination) {
        return res.json(tours);
    }

    const filteredTours = tours.filter((tour) =>
        tour.destination.toLowerCase().includes(destination.toLowerCase())
    );

    res.json(filteredTours);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});