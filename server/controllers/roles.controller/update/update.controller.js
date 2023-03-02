import Role from '../../../models/role.model';

const update = async (req, res) => {
    try{
        const { id } = req.params;
        const { title } = req.body;
        const role = await Role.findByIdAndUpdate(id, { title }, { new: true });
        res.status(200).json({role: role, message: "Updated role successfully"});
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

export default {update}