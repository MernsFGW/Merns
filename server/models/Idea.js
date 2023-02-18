import mongoose, { model } from "mongoose";

const IdeaSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        userId: {
            type: mongoose.Schema.Types.ObjectId, ref: "User",
            required: "User is required"
        },
        documentId: {
            type: mongoose.Schema.Types.ObjectId, ref: "Document",
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId, ref: "Category",
            required: "Category is required"
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId, ref: "User",
        }],
        dislikes: [{
            type: mongoose.Schema.Types.ObjectId, ref: "User",
        }]
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Idea", IdeaSchema);