const express = require("express");
const cors = require("cors");
const vehicleRoute = require("./routes/vehicleRoutes");
const bookingRoute = require("./routes/bookingRoutes");
const dbConnect = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/vehicles", vehicleRoute);
app.use("/bookings", bookingRoute);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    await dbConnect();
    console.log("DB connected");
    console.log(`Server running on http://localhost:${port}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
