const mongoose = require("mongoose");
const VehicleType = require("../model/vehicleType");
const Vehicle = require("../model/vehicle");
require("dotenv").config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    const hatchback = await VehicleType.create({ name: "Hatchback" });
    const suv = await VehicleType.create({ name: "SUV" });
    const sedan = await VehicleType.create({ name: "Sedan" });
    const bike = await VehicleType.create({ name: "Cruiser" });

    await Vehicle.create([
      { name: "Hatchback Car 1", type: hatchback._id, available: true },
      { name: "SUV Car 1", type: suv._id, available: true },
      { name: "Sedan Car 1", type: sedan._id, available: true },
      { name: "Cruiser Bike 1", type: bike._id, available: true },
    ]);

    console.log("Database seeded!");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
