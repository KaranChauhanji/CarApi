const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB connected successfully");
  } catch (error) {
    throw new Error("Database connection failed");
  }
};

module.exports = dbConnect;
