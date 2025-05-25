import user from '../models/user.model.js';
import asyncHandler from "express-async-handler";
import generateToken from "../util/generateToken.js";
import User from '../models/user.model.js';



//REGISTER USER
//route: POST /api/v1/register
//@access Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

//LOGIN USER
//route: POST /api/v1/auth/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && await (user.matchPassword(password))) {
        // Generate token and send response
        generateToken(res, user._id);
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
        1
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

//LOGOUT USER
//route: POST /api/v1/auth/Logout
//@access Public

const logOut = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ message: 'User logged out successfully' });
});

export { registerUser, loginUser, logOut };
