import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/user.model';
import Role from '../../models/role.model';
import config from '../../config/config';
const router = express.Router();


router.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username }).populate('roleId').populate('departmentId');
        const role = await Role.findOne({ _id: user.roleId });
        // const department = await Department.findOne({ _id: user.departmentId });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({id: user._id, role: role}, config.jwtSecret);

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
