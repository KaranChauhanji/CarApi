const { Schema, model } = require("mongoose");

const vehicleSchema = new Schema({
  name: { type: String, required: true },
  type: { type: Schema.Types.ObjectId, ref: "VehicleType", required: true },
  available: { type: Boolean, default: true },
});

module.exports = model("Vehicle", vehicleSchema);
