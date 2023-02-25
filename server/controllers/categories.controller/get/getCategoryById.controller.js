import Category from '../../../models/category.model';
import mongoose from "mongoose";

const getCategoryById = async (req, res) => {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (category) {
        res.status(200).json(category);
    } else {
        res.status(404).send('No category with that id');
    }
}

export default { getCategoryById }