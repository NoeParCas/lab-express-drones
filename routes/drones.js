const express = require('express');
const router = express.Router();
const Drones = require('../models/Drone.model.js')

// require the Drone model here

router.get('/', (req, res, next) => {
  // Iteration #2: List the drones
  Drones.find()
  .then((allDrones) => {
    res.render("drones/list.hbs", {allDrones})
  })
});

router.get('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body
  //console.log(name)
  Drones.create({name, propellers, maxSpeed})
  .then((createDron)=>{
    res.redirect("/drones")
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  Drones.findByIdAndUpdate(id)
  .then((updateDron)=>{
    res.render("drones/update-form.hbs", {updateDron})
  })
  .catch((err)=>{
    next(err);
  })  
});

router.post('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  const {name, propellers, maxSpeed} = req.body
  Drones.findByIdAndUpdate(id, {name, propellers, maxSpeed})
  .then((updateDron) =>{
    res.redirect("/drones")
  })
  .catch((err)=>{
    next(err);
  }) 
});

router.post('/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params
  Drones.findByIdAndDelete(id)
  .then((deleteDron)=>{
    res.redirect("/drones")
  })
  .catch((err)=>{
    next(err);
  }) 
});

module.exports = router;
