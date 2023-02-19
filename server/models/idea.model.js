import mongoose, { model } from "mongoose";

const IdeaSchema = new mongoose.Schema(
    {
        content: String,
        userId: {
            type: mongoose.Schema.Types.ObjectId, ref: "User",
            required: false
        },
        photo:{
            data: Buffer,
            contentType: String
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId, ref: "Category",
            required: false
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

export default mongoose.model("Idea", IdeaSchema);