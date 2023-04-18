import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema(
    {
        title: String
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Role', RoleSchema);