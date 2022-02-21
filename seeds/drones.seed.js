const droneArr = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

const Drone = require ('../models/Drone.model')

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/lab-express-drones")
.then((response) => {
    console.log("CONECTADOS!!")
    return Drone.insertMany(droneArr)
})
.then((response) => {
    mongoose.connection.close()
})
.catch((error) => {
    console.log("ERROR")
})