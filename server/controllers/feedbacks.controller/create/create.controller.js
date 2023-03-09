import Feedback from "./../../../models/feedback.model";
import errorHandler from "../../../helpers/dbErrorHandler.js";

const create = async (req, res) => {
  try {
    const feedback = new Feedback({ ideaId, author, parentFeedbackId });
    const savedFeedback = await feedback.save();
    res.status(200).json(savedFeedback);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  create,
};
