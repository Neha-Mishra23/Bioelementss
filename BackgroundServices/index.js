import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import cron from "node-cron";
import sendWelcomeEmail from "./EmailServices/sendWelcomeEmail.js";
import sendPendingOrderEmail from "./EmailServices/sendPendingOrderEmail.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

//SCHEDULE SERVICES

const services = () =>{
    cron.schedule("* * * * * *", () => {
        //console.log("running a task every minute");
        sendWelcomeEmail();
        sendPendingOrderEmail();
        sendDeliveredOrderEmail();
    });
}
services();

app.listen(PORT, () =>{
    console.log(`Backgroundservices is running on port ${PORT}`);
    dbConnection();
})