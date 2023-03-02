import Role from '../../../models/role.model';

const create = async (req, res) => {
    try{
        const { title } = req.body;
        const role = await Role.create({ title });
        res.status(200).json({role: role, message: "Created role successfully"});
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

export default {create}