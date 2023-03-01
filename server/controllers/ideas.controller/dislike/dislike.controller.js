import mongoose from 'mongoose';

import Idea from './../../../models/idea.model';
import errorHandler from '../../../helpers/dbErrorHandler.js';

const dislikeIdea = async (req, res) => {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No idea with that id');

        const idea = await Idea.findById(id);

        const updatedIdea = await Idea.findByIdAndUpdate(id, { dislikes: idea.dislikes + 1 }, { new: true });

        res.status(200).json(updatedIdea);
    } catch (error) {
        res.status(400).json( { error: errorHandler.getErrorMessage(error) } );
    }
}

export default { dislikeIdea }