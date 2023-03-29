import Department from './../../../models/department.model';

const departmentById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const department = await Department.findById(id);

        if (!department) 
            return res.status(400).json({
                error: "Department not found"
            }) 
            res.status(200).json(department);

    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve department"
        })
    }
}

export default {
    departmentById
}