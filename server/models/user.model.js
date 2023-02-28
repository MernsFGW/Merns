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
        avatar: {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            },
            required: false
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