// Import model
import User from './../../../models/user.model';

// update user by id
const update = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export default {
    update
}