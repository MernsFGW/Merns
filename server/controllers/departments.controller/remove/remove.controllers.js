import errorHandler from '../../../helpers/dbErrorHandler.js';

const remove = async (req, res) => {
    try {
        let department = req.information;
        let deletedDepartment = await department.remove();
        res.status(200).json({
            department: deletedDepartment,
            message: "Deleted department Successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
    }
}

export default {remove}