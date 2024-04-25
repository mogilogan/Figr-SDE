import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

export const update = async (req, res) => {
  const { _id, email, firstName, lastName } = req.body;

  try {
    // Find the user by _id
    const oldUser = await UserModal.findOne({ _id });

    // If user doesn't exist, return an error
    if (!oldUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const name = `${firstName} ${lastName}`;

 



    // Update user details
    const updatedUser = await UserModal.findOneAndUpdate(
      { _id },
      { email, name },
      { new: true } // Return the updated user document
    );

    return res.status(200).json({ message: "User updated successfully", result: updatedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const updatepass = async (req, res) => {
  const { _id,  password, newPassword } = req.body;

  try {
    // Find the user by _id
    const oldUser = await UserModal.findOne({ _id });

    // If user doesn't exist, return an error
    if (!oldUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the provided old password matches the user's current password
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid old password" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    // Update user details
    const updatedUser = await UserModal.findOneAndUpdate(
      { _id },
      {  password: hashedPassword },
      { new: true } // Return the updated user document
    );

    return res.status(200).json({ message: "Password updated successfully", result: updatedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};