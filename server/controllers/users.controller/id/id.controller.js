import User from './../../../models/user.model';

const userById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).exec();
        res.profile = user;
    } catch (err) {
        res.status(404).json({ message: 'User not found' });
    }
};


export default {
    userById
}