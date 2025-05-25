import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// dotenv.config();

const generateToken = (rest, userId) => {
const token = jwt.sign({userId}, process.env.JWT_SEC, {
  expiresIn: "30d",
});

rest.cookie("jwt", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV !== "development", // Use secure cookies in productionimport jwt from "jsonwebtoken";== "production", // Use secure cookies in production
  sameSite: "strict", // Helps prevent CSRF attacks
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
})

}

export default generateToken;