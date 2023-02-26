import Term from './../../../models/term.model.js';
import mongoose from "mongoose";

const removeTerm = async (req, res) => {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No term with that id');

        await Term.findByIdAndRemove(id);

        res.status(200).json({ message: 'Term deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default { removeTerm }