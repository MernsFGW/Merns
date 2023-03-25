import User from './../../../models/user.model';

const bcrypt = require('bcrypt');
const saltRounds = 10;

const updatePassword = async (req, res) => {
    const {password} = req.body;
    
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const updatedUser = await User.findByIdAndUpdate({_id: req.params.id}, 
            {
                password: hashedPassword,
            }, {
                upsert: true
            });
        res.json({
            user: updatedUser,
            message: "Updated user successfully"
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export default {
    updatePassword
}