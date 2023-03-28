import errorHandler from '../../../helpers/dbErrorHandler.js';
import Department from './../../../models/department.model';
import mongoose from "mongoose";

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No term with that id');
        await Department.findByIdAndRemove(id);

        res.status(200).json({
            message: "Deleted department Successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
    }
}

export default {remove}