import mongoose, { model } from "mongoose";

const IdeaSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: "Title is required",
        },
        content: { 
            type: String,
            required: "Content is required",
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId, ref: "User",
            required: "User is required",
        },
        photo:{
            public_id: {
                type: String,
            },
            url: {
                type: String,
            }
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId, ref: "Category",
            required: "Category is required",
        },
        likes: {
            type: [String],
            default: [],
        },
        dislikes: {
            type: [String],
            default: [],
        },
        termId: {
            type: mongoose.Schema.Types.ObjectId, ref: "Term",
            required: false
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model("Idea", IdeaSchema);