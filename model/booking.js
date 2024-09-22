const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  vehicle: { type: Schema.Types.ObjectId, ref: "Vehicle", required: true },
  user: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

module.exports = model("Booking", bookingSchema);
