import Idea from "../../../models/idea.model";
import errorHandler from '../../../helpers/dbErrorHandler.js';
import mongoose from "mongoose";
const findbyUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const ideas = await Idea.aggregate([
            { 
                $match: {
                    userId: mongoose.Types.ObjectId(userId) 
                } 
            },
            {
                $lookup: {
                    from: "feedbacks",
                    localField: "_id",
                    foreignField: "ideaId",
                    as: "feedbacks",
                },
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    content: 1,
                    incognito: 1,
                    userId: 1,
                    photo: 1,
                    categoryId: 1,
                    likes: 1,
                    dislikes: 1,
                    termId: 1,
                    createdAt: 1,
                    updatedAt: 1,
                    feedbackCount: { $size: "$feedbacks" },
                },
            },
            { $sort: { createdAt: -1 } },
            {
                $lookup: {
                    from: "categories",
                    localField: "categoryId",
                    foreignField: "_id",
                    as: "category",
                },
            },
            {
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "user",
                },
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    content: 1,
                    incognito: 1,
                    userId: 1,
                    photo: 1,
                    categoryId: { $arrayElemAt: ["$category", 0] },
                    likes: 1,
                    dislikes: 1,
                    termId: 1,
                    feedbackCount: 1,
                    userId: { $arrayElemAt: ["$user", 0] },
                    createdAt: 1,
                    updatedAt: 1,
                },
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    content: 1,
                    incognito: 1,
                    userId: 1,
                    photo: 1,
                    categoryId: { "title": "$categoryId.title" },
                    likes: 1,
                    dislikes: 1,
                    termId: 1,
                    feedbackCount: 1,
                    user: {
                        _id: "$user._id",
                        fullName: "$user.fullName",
                        avatar: "$user.avatar",
                    },
                    createdAt: 1,
                    updatedAt: 1,
                },
            },
        ]);
    
        if (!ideas) return res(404).json({ message: 'No ideas found' });
    
        res.status(200).json(ideas);
    } catch (error) {
        res.status(400).json({ error: errorHandler.getErrorMessage(error) });
    }
}

export default { findbyUserId }