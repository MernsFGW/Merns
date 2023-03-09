import errorHandler from "../../../helpers/dbErrorHandler.js";
import Feedback from "../../../models/feedback.model.js";

const update = async (req, res) => {
  const { id } = req.params;
  const { ideaId, author, parentFeedbackId } = req.body;

  try {
    const feedback = await Feedback.findById(id);
    if (!feedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }

    feedback.ideaId = ideaId;
    feedback.author = author;
    feedback.parentFeedbackId = parentFeedbackId;

    const updatedFeedback = await feedback.save();
    res.status(200).json(updatedFeedback);
  } catch (error) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(error),
    });
  }
};

export default {
  update,
};
