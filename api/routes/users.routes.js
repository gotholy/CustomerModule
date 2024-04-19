import express from "express"
import User from "../models/user.model.js";
import jwt from "jsonwebtoken"

const router = express.Router()

// Login route
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: 'Invalid username or password' });

    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.header('auth-token', token).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router