import Role from '../../../models/role.model';

const roleById = async (req, res) => {
    try {
        const role = await Role.findById(req.params.id);
        res.json(role);
    } catch (err) {
        res.status(404).json({ message: 'Role not found' });
    }
};


export default {roleById}