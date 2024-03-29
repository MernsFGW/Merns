import Category from '../../../models/category.model';
import mongoose from "mongoose";

const updateCategory = async (req, res) => {
    try {
        const { id: _id } = req.params;
        
        const category = req.body;

        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No category with that id');

        const updatedCategory = await Category.findByIdAndUpdate(_id, { ... category, _id }, { new: true });

        res.json(updatedCategory);
    } catch (error) {
        res.status(400).json( { error: errorHandler.getErrorMessage(error) } );
    }
}

export default { updateCategory }