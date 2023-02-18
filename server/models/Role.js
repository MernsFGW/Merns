import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema(
    {
        title: String
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Role', RoleSchema)