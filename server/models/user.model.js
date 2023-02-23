import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: "Username is required"
        },
        password: {
            type: String,
            required: "Password is required"
        },
        fullName: {
            type: String,
            required: "Full name is required"
        },
        roleId: {
            type: mongoose.Schema.Types.ObjectId, ref: "Role",
            required: false,
        },
        departmentId: {
            type: mongoose.Schema.Types.ObjectId, ref: "Department",
            required: false,
        }
    },
    {
        timestamps: false,
    }
);

export default mongoose.model('User', UserSchema);