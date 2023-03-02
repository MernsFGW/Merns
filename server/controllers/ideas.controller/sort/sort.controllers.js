import errorHandler from '../../../helpers/dbErrorHandler.js';
import Idea from '../../../models/idea.model';

const sortIdea = async (req, res) => {
    try {
        let sortObj = {}
        // check params in req
        const { like, dislike, feedback } = req.query;
        if(like === 'true'){
            sortObj["likesCount"] = -1;
        }
        if(dislike === 'true'){
            sortObj["dislikesCount"] = -1;
        }
        if(feedback === 'true'){
            sortObj["feedbackCount"] = -1;
        }
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
                    feedbackCount: { $size: "$feedbacks" },
                    // count the number of likes
                    likesCount: { $size: "$likes" },
                    // count the number of dislikes
                    dislikesCount: { $size: "$dislikes" }
                }
            },
            // sort by the feedbackCount and likes
            { $sort: sortObj }
        ]);
        res.json(ideas)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default { sortIdea }