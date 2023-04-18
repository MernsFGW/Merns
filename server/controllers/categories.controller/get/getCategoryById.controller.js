import Category from '../../../models/category.model';
import errorHandler from '../../../helpers/dbErrorHandler.js';

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Category.findById(id);

        if(!category) return res(404).json({ message: 'No category with that id'});

        res.status(200).json(category);
    } catch (error) {
        res.status(400).json( { error: errorHandler.getErrorMessage(error) } );
    }
}

export default { getCategoryById }