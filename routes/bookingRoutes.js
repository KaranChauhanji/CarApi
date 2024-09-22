const { Router } = require("express");
const Booking = require("../model/booking");
const Vehicle = require("../model/vehicle");

const bookingRoute = Router();

bookingRoute.post("/", async (req, res) => {
  const { vehicleId, user, startDate, endDate } = req.body;

  try {
    const existingBookings = await Booking.find({
      vehicle: vehicleId,
      $or: [{ startDate: { $lt: endDate }, endDate: { $gt: startDate } }],
    });

    if (existingBookings.length > 0) {
      return res
        .status(400)
        .json({ message: "Vehicle is already booked during this time." });
    }

    const booking = new Booking({
      vehicle: vehicleId,
      user,
      startDate,
      endDate,
    });
    await booking.save();
    return res.status(201).json({ message: "Booking successful", booking });
  } catch (error) {
    return res.status(500).json({ message: "Error making booking", error });
  }
});

module.exports = bookingRoute;
