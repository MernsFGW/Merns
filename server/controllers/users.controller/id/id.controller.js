import User from './../../../models/user.model';

const userById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(404).json({ message: 'User not found' });
    }
};


export default {
    userById
}