import Idea from "../../../models/idea.model";
import errorHandler from '../../../helpers/dbErrorHandler.js';

const findbyUserId = async (req, res) => {
    try {
        const { userId } = req.params;

        const ideas = await Idea.find({userId})
                                .populate('like')
                                .populate('dislike')
                                .populate('categoryId', 'title')
                                .populate('userId', 'fullName avatar').exec();

        if(!ideas) return res(404).json({ message: 'No ideas found'});

        res.status(200).json(ideas);
    } catch (error) {
        res.status(400).json( { error: errorHandler.getErrorMessage(error) } );
    }
}

export default {findbyUserId}