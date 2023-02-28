import Category from '../../../models/category.model';
import mongoose from "mongoose";

const removeCategory = async (req, res) => {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No category with that id');

        await Category.findByIdAndRemove(id);

        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(400).json( { error: errorHandler.getErrorMessage(error) } );
    }
}

export default { removeCategory }