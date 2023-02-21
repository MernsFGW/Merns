import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: "Title is required"
        }
    }
)

module.exports = mongoose.model('Category', CategorySchema);