import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnection from "./util/db.js";
import app from "./app.js";

// Load environment variables from .env file
dotenv.config();

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection();
});

// Connect to MongoDB
mongoose
  .connect(process.env.DB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});