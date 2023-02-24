import categories from "../../../models/category.model";

const getCategoryById = async (req, res) => {
    const { id } = req.params;

    try {
        const category = await categories.findById(id);

        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default { getCategoryById }