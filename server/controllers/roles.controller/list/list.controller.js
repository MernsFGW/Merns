import Role from '../../../models/role.model';

const list= async (req, res) => {
    try {
        const roles = await Role.find();
        res.status(200).json(roles);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export default {list}