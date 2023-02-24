import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: "Title is required"
        }
    }
)

export default mongoose.model('Category', CategorySchema);