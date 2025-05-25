import express from 'express';
import { logOut } from '../controller/Auth.controller.js';
import e from 'express';
import { registerUser, loginUser } from '../controller/Auth.controller.js';

const router = express.Router();

//REGISTER USER ROUTER
router.post("/register", registerUser);

//LOGIN USER ROUTER
router.post("/login", loginUser);

//LOGOUT USER
router.get("/logout", logOut);

export default router;