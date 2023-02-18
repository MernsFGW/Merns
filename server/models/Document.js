import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema(
    {
        contentType: String,
        data: Buffer
    }
)

module.exports = mongoose.model("Document", DocumentSchema);