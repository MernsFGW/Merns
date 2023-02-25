import Department from './../../../models/department.model';

const departmentById = async (req, res, next, id) => {
    try {
        let department = await Department.findById(id).exec();
        if (!department) 
            return res.status(400).json({
                error: "Department not found"
            }) 
        req.information = department
        next()
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve department"
        })
    }
}

export default {
    departmentById
}