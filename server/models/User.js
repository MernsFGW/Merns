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
            required: "Role is required"
        },
        departmentId: {
            type: mongoose.Schema.Types.ObjectId, ref: "Department",
            required: "Department is required"
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', UserSchema);