import authRoute from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";
import bannerRoute from "./routes/banner.route.js";
import orderRoute from "./routes/order.route.js";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { notFound, errorHandler } from "./Middleware/error.middleware.js";

const app = express();


// json body
app.use(express.json());


//cookie parser
app.use(cookieParser());

//cors
app.use(cors());

// Root route to check server status
// app.get("/", (req, res) => {
//     res.send("API is running");
// });

//Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/banners", bannerRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/orders", orderRoute);

// Error middleware
app.use(notFound);
app.use(errorHandler);


export default app;