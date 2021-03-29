import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";

dotenv.config({ path: "variables.env" });

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(404).json({ message: "User does not exist." });
    }
    const correctPassword = await bcrypt.compare(password, userExists.password);
    if (!correctPassword)
      return res.status(400).json({ message: "Invalid credentials." });
    const token = jwt.sign(
      { email: userExists.email, id: userExists._id },
      process.env.SECRET,
      { expiresIn: "1d" }
    );
    res.status(200).json({ result: userExists, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) return res.status({ message: "User already exists." });
  //hash password
  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    const newUser = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.SECRET,
      { expiresIn: "1d" }
    );
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
