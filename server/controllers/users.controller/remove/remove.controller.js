// Import model
import User from './../../../models/user.model';

const remove = async (req, res) => {
    try {
        User.findByIdAndRemove(req.params.id, function(err, user) {
            if (err) {
                res.status(400).json({ message: err.message });
            } else {
                res.status(200).json({ message: "Deleted user successfully", user: user });
            }
        }).exec();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export default {
    remove
}