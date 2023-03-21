import jwt from "jsonwebtoken";
import config from "../config/config";

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.userId = decoded.id;
    let route = req.originalUrl.split("/")[2];
    if (["terms", "admin"].includes(route)) {
      if (!["admin"].includes(decoded.role?.title?.toLowerCase())) {
        return res.status(401).json({ message: "Only admin can do this" });
      } else {
        req.role = decoded.role;
      }
    }
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default verifyToken;
