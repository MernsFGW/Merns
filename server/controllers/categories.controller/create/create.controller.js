import errorHandler from '../../../helpers/dbErrorHandler';
import categories from "../../../models/category.model";

const createCategory = async (req, res) => {
    const category = req.body;

    const newCategory = new categories(category);

    try {
        await newCategory.save();

        res.status(201).json(newCategory);
    } catch (err) {
        res.status(409).json( { error: errorHandler.getErrorMessage(err) });
    }
}

export default { createCategory };