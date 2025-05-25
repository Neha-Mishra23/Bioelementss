import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import cron from "node-cron";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

//SCHEDULE SERVICES

const services = () =>{
    cron.schedule("* * * * * *", () => {
        //console.log("running a task every minute");
    });
}
services();

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
    dbConnection();
})