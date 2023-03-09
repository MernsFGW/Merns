import errorHandler from "../../../helpers/dbErrorHandler.js";
import Feedback from "./../../../models/feedback.model";

const list = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(error),
    });
  }
};

export default { list };
