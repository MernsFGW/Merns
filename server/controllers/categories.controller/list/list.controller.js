import errorHandler from '../../../helpers/dbErrorHandler';
import categories from "../../../models/category.model";

const getAllCategories = async (req, res) => {
    try {
        const listCategories = await categories.find();

        res.status(200).json(listCategories);
    } catch (error) {
        res.status(404).json( { error: errorHandler.getErrorMessage(err) });
    }
}

export default { getAllCategories }