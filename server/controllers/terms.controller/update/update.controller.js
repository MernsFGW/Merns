import Term from './../../../models/term.model.js';
import mongoose from "mongoose";

const updateTerm = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const term = req.body;

        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No term with that id');

        const updatedTerm = await Term.findByIdAndUpdate(_id, { ... term, _id }, { new: true });

        res.status(200).json(updatedTerm);
    } catch (error) {
        res.status(400).json({ message: 'Term deleted failed' });       
    }
}

export default { updateTerm }