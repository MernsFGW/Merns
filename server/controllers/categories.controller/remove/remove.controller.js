import mongoose from "mongoose";
import categories from "../../../models/category.model";

const removeCategory = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No category with that id');

    await categories.findByIdAndRemove(id);

    res.json({message: 'Category deleted sucessfully'});
}

export default { removeCategory }