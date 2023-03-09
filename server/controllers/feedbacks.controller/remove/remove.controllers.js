import errorHandler from "../../../helpers/dbErrorHandler.js";
import Feedback from "./../../../models/feedback.model.js";

const remove = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!feedback) {
      return res.status(404).send();
    }
    res.status(200).json({
      feedback: feedback._id,
      message: "Deleted feedback Successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default { remove };
