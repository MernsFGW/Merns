// Import model
import User from './../../../models/user.model';

// get all users
const list = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export default {
    list
}