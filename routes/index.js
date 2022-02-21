const express = require("express");
const router = express.Router();
const droneRoutes = require("./drones.js")

router.use("/drones", droneRoutes )

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

module.exports = router;
