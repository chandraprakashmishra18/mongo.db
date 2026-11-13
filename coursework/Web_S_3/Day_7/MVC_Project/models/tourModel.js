const fs = require('fs');
const path = require('path');

const packageFilePath = path.join(__dirname, '../data/tour.json');
 const getAll = () => {
    const data = fs.readFileSync(packageFilePath, 'utf-8');
    return JSON.parse(data);
 }
 const getById = (id) => {
    const data = fs.readFileSync(packageFilePath, 'utf-8');
    const packages = JSON.parse(data);
    return packages.find((tour) => tour.id === id);
}

module.exports = {
    getAll,
    getById
}

