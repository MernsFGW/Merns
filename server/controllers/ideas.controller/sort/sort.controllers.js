import errorHandler from '../../../helpers/dbErrorHandler.js';
import Idea from '../../../models/idea.model';

const sortIdea = async (req, res) => {
    try {
        let sortObj = {}
        // check params in req
        const { sort } = req.query;
        if(sort === 'like'){
            sortObj["likesCount"] = -1;
        }
        if(sort === 'dislike'){
            sortObj["dislikesCount"] = -1;
        }
        if(sort === 'feedback'){
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
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "userId"
                }
            },
            {
                $lookup: {
                    from: "categories",
                    localField: "categoryId",
                    foreignField: "_id",
                    as: "categoryId"
                }
            },
            {
                $project: {
                    title: 1,
                    content: 1,
                    userId: 1,
                    photo: 1,
                    categoryId: 1,
                    createdAt: 1,
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
            {
                $unwind : "$userId"
            },
            {
                $unwind: "$categoryId"
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