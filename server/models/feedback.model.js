import mongoose, { Schema } from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  ideaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Idea",
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  parentFeedbackId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Feedback",
      required: false,
    },
  ],
});

export default mongoose.model("Feedback", FeedbackSchema);
