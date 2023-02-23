// Import model
import User from './../../../models/user.model';

const bcrypt = require('bcrypt');
const saltRounds = 10;

// create new user
const create = async (req, res) => {
    const { username, password, fullName, roleId, departmentId } = req.body;
    try {
        // Hash the password before saving the user
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            username,
            password: hashedPassword,
            fullName,
            roleId,
            departmentId
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export default {
    create
}