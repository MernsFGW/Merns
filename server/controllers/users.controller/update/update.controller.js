import User from './../../../models/user.model';

const update = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            user: updatedUser,
            message: "Updated user successfully"
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export default {
    update
}