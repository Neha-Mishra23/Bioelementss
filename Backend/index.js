import app from "./app.js";
import dotenv from "dotenv";
import dbConnection from "./util/db.js";
// Load environment variables from .env file
dotenv.config();

// Start the server
const PORT = process.env.PORT;
app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection();
});