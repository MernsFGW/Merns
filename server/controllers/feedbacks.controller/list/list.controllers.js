import errorHandler from "../../../helpers/dbErrorHandler.js";
import Feedback from "./../../../models/feedback.model";

const list = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({"createdAt": -1});
    res.status(200).json(feedbacks);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default { list };
