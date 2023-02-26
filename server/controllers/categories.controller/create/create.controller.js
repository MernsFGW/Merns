import Category from '../../../models/category.model';
import errorHandler from '../../../helpers/dbErrorHandler.js';

const createCategory = async (req, res) => {
    try {
        const category = req.body;

        const newCategory = new Category(category);

        await newCategory.save();

        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json( { error: errorHandler.getErrorMessage(error) } );
    }
}

export default { createCategory }