import errorHandler from '../../../helpers/dbErrorHandler.js';
import Department from './../../../models/department.model';

const update = async (req, res) => {

    const { id } = req.params;
    const department = await Department.findById(id);
    department.updatedAt = Date.now();
    department.title = req.body.title;
    try {
        await department.save();
        res.json({
            department: department,
            message: "Updated department successfully"
    });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


export default {
    update
}