import jwt from 'jsonwebtoken';
import config from '../config/config';

// Middleware to verify token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.userId = decoded.id;
        // check if request do something about term, then user should admin
        next();
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

export default verifyToken;