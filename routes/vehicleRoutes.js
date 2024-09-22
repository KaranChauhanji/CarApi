const { Router } = require("express");
const Vehicle = require("../model/vehicle");

const vehicleRoute = Router();

// GET all vehicles data
vehicleRoute.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find().populate("type");
    return res.json(vehicles);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching vehicles", error });
  }
});

module.exports = vehicleRoute;
