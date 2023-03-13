import errorHandler from "../../../helpers/dbErrorHandler.js";
import Feedback from "../../../models/feedback.model.js";

const update = async (req, res) => {
  const feedbackId = req.params.id;
  const { content } = req.body;

  try {
    const feedback = await Feedback.findByIdAndUpdate(
      feedbackId,
      { content },
      { new: true }
    );
    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }
    res.json(feedback);
  } catch (error) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(error),
    });
  }
};

export default {
  update,
};
