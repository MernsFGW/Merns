import errorHandler from '../../../helpers/dbErrorHandler.js';

const findById = async (req, res) => {
    try {
        const idea = req.information;
        res.status(200).json({
            idea: {
                ideaId: idea._id,
                photo: idea.photo,
                likes: idea.likes,
                dislikes: idea.dislikes,
                title: idea.title,
                content: idea.content,
                category: idea.categoryId.title,
                createdAt: idea.createdAt,
                updatedAt: idea.updatedAt
            },
            user: {
                userId: idea.userId._id,
                avatar: idea.userId.avatar,
                fullName: idea.userId.fullName,
            },
            message: "Idea found successfully"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
    }
}

export default {
    findById
}