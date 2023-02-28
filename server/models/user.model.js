import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: "Username is already exist",
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
        timestamps: true,
    }
);

export default mongoose.model('User', UserSchema);