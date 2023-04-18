import User from './../../../models/user.model';

const userById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
                                .populate('roleId', 'title')
                                .populate('departmentId', 'title')
                                .exec();
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: 'User not found' });
    }
};


export default {
    userById
}