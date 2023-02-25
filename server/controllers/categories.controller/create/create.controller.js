import Category from '../../../models/category.model';

const createCategory = async (req, res) => {
    const category = req.body;

    const newCategory = new Category(category);

    try {
        await newCategory.save();

        res.status(201).json(newCategory);
    } catch (error) {
        res.status(409).json( { message: error.message } );
    }
}

export default { createCategory }