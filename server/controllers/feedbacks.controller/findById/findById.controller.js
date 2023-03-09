import errorHandler from "../../../helpers/dbErrorHandler.js";
import Feedback from "../../../models/feedback.model";

const findById = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id)
      .populate("author", "-password")
      .populate("parentFeedbackId");
    if (!feedback) {
      return res.status(400).json({
        error: "Feedback not found",
      });
    }
    res.status(200).json(feedback);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  findById,
};
