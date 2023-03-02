import Role from '../../../models/role.model';

const remove = async (req, res) => {
    try{
        const { id } = req.params;
        const role = await Role.findByIdAndDelete(id);
        res.status(200).json({role: role, message: "Deleted role successfully"});
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

export default {remove}