import express from "express";
import cors from "cors";
import { errorHandler, notFound } from "./Middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";
import bannerRoute from "./routes/banner.route.js";
import orderRoute from "./routes/order.route.js";


const app = express();


// json body
app.use(express.json());


//cookie parser
app.use(cookieParser());

//cors
app.use(cors());

//Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/banners", bannerRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/orders", orderRoute);

// Error middleware
app.use(notFound);
app.use(errorHandler);


export default app;