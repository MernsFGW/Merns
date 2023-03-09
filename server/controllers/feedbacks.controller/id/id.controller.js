import Feedback from "./../../../models/feedback.model.js";

const feedbackById = async (req, res, next, id) => {
  try {
    const feedback = await Feedback.findById(req.params.id)
      .populate("author", "-password")
      .populate("parentFeedbackId");
    if (!feedback) {
      return res.status(400).json({
        error: "Feedback not found",
      });
    }
    req.information = feedback;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve feedback",
    });
  }
};

export default {
  feedbackById,
};
