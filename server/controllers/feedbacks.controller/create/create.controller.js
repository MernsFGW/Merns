import Feedback from "./../../../models/feedback.model";
import User from "./../../../models/user.model";
import errorHandler from "../../../helpers/dbErrorHandler.js";

const create = async (req, res) => {
  try {
    const { ideaId, content, userId, incognito } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    const { fullName, departmentId, roleId, _id } = user;

    let feedback = new Feedback({
      ideaId,
      userId: { _id , fullName, departmentId, roleId },
      content,
      incognito,
    });

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