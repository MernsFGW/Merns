import Category from '../../../models/category.model';
import mongoose from "mongoose";

const removeCategory = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No category with that id');

    await Category.findByIdAndRemove(id);

    res.json({ message: 'Category deleted successfully' });
}

export default { removeCategory }