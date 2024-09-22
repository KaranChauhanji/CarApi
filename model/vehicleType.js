const { Schema, model } = require("mongoose");

const vehicleTypeSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = model("VehicleType", vehicleTypeSchema);
