import jwt from "jsonwebtoken"
import "dotenv/config"

export const auth = (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token verified:', verified);
    req.user = verified;
    next();
  } catch (err) {
    console.log('Token verification failed:', err);
    res.status(400).json({ message: 'Invalid token' });
  }
}

export const verifyUser = (req, res, next) => {
  console.log('req.user:', req.user);
  if (!req.user) return res.status(401).json({ message: 'Access denied' });

  next();
}
