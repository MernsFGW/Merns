import Feedback from "./../../../models/feedback.model.js";

const feedbackById = async (req, res, next, id) => {
  try {
    const feedback = await Feedback.findById(feedbackId)
      .populate("ideaId")
      .populate("author")
      .populate("parentFeedbackId");
    if (!feedback) {
      return res.status(404).send();
    }
    req.feedback = feedback;
    next();
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  feedbackById,
};
