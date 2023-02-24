import mongoose from "mongoose";
import categories from "../../../models/category.model";

const updatedCategory = async (req, res) => {
    const { id: _id } = req.params;
    const category = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No category with that id');

    const updatedCategory = await categories.findByIdAndUpdate(_id, { ... category, _id }, { new: true});

    res.json(updatedCategory);
}

export default { updatedCategory }