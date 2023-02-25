import Category from '../../../models/category.model';

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();

        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json( { message: error.message } );
    }
}

export default { getAllCategories }