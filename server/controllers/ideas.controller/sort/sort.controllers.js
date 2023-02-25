import errorHandler from '../../../helpers/dbErrorHandler.js';
import Idea from '../../../models/idea.model';

const sortIdea = async (req, res) => {
    try {
        // join the Idea and Feedback collections
        let ideas = await Idea.aggregate([
            {
                $lookup: {
                    from: "feedbacks",
                    localField: "_id",
                    foreignField: "ideaId",
                    as: "feedbacks"
                }
            },
            {
                $project: {
                    title: 1,
                    content: 1,
                    userId: 1,
                    photo: 1,
                    categoryId: 1,
                    likes: 1,
                    dislikes: 1,
                    termId: 1,
                    feedbacks: 1,
                    // count the number of feedbacks
                    feedbackCount: { $size: "$feedbacks" }
                }
            },
            // sort by the feedbackCount and likes
            { $sort: { feedbackCount: -1, likes: -1 } }
        ]);
        res.json(ideas)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default { sortIdea }