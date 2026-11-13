const fs  =require("fs");
const path = require("path");

const packageFilePath = path.join(__dirname,'..data/tour.json');

const getAll = () => {
    const data = fs.readFileSync(packageFilePath,'utf-8');
    return JSON.parse(data);
}

const getById = (id) => {
    const data = fs.readFileSync(packageFilePath,'utf-8');
    const package = JSON.parse(data);
    return package.find(pkg => pkg.id === id);
}

const save = (tour)=>{
    const data = fs.readFileSync(packageFilePath,'utf-8');
    const packages = JSON.parse(data);
    packages.push(tour);
    fs.writeFileSync(packageFilePath,JSON.stringify(packages,null,2),utf-8);
}

const update = (id,updateTour)=>{
    const data = fs.readFileSync(packageFilePath,'utf-8');
    const packages = JSON.parse(data);
    const index = packages.findIndex(pkg => pkg.id === id);
    if(index!== -1){
        packages[index] = { ...packages[index], ...updatedTour};
        fs.writeFileSync(packageFilePath,JSON.stringify(packages,null,2),'utf-8');
    }
}

const deleteTour = (id) => {
    const data = fs.readFileSync(packageFilePath,'utf-8');
    const packages = JSON.parse(data);
    const index = packages.filter(pkg =>pkg.id !== id);
    if(index!==-1){
        packages[index] = { ...packages[index], ...updatedTour};
    }
}