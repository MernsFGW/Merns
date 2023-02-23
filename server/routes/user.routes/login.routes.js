import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/user.model';
import config from '../../config/config';
const router = express.Router();

// Login user
router.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await User.findOne({ username }).populate('roleId').populate('departmentId');
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Check password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Generate token
        const token = jwt.sign({ id: user._id }, config.jwtSecret);

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                username: user.username,
                fullName: user.fullName,
                role: user.roleId,
                department: user.departmentId
            }
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
