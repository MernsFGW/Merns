import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Department", DepartmentSchema);
