// index.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB and start the server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to MongoDB");

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Stop the process if DB connection fails
  }
};

// Start the app
startServer();

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});
