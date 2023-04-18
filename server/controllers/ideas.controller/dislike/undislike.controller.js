import mongoose from 'mongoose';

import Idea from './../../../models/idea.model';
import errorHandler from '../../../helpers/dbErrorHandler.js';

const undislikeIdea = async (req, res) => {
    try {
        const { id } = req.params;

        if(!req.params.userId) return res.status(404).json({ message: "Unauthenticated" });

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No idea with that id');

        const idea = await Idea.findById(id);

        await idea.dislikes.pull(req.params.userId);

        const updatedIdea = await Idea.findByIdAndUpdate(id, idea, { new: true });

        res.status(200).json(updatedIdea);
    } catch (error) {
        res.status(400).json( { error: errorHandler.getErrorMessage(error) } );
    }
}

export default { undislikeIdea }