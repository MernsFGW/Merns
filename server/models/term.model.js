import mongoose, { model } from "mongoose";

const TermSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    startDate: Date,
    closureDate: Date,
    endDate: Date,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Term", TermSchema);
