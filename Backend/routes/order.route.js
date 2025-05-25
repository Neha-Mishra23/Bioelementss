import express from "express";
const router = express.Router();
import { createOrder, getAllOrders, getUserOrder, updateOrder, deleteOrder } from "../controller/order.controller.js"; 
import { getUser } from "../controller/user.controller.js";
import protect from "../Middleware/auth.middleware.js";


//CREATE ORDER ROUTE
router.post("/", createOrder);

//UPDATE ORDER ROUTE
router.put("/:id", updateOrder);

//GET ALL ORDERS ROUTE
router.get("/",protect, getAllOrders);

//DELETE ORDER ROUTE
router.delete("/:id", deleteOrder);

//GET USER'S ORDER ROUTE
router.get("/find/:userId", getUserOrder);  

export default router;