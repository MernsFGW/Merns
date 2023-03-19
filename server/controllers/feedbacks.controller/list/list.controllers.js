import errorHandler from "../../../helpers/dbErrorHandler.js";
import Feedback from "./../../../models/feedback.model";

const listFeedbacks = async (req, res) => {
  try {
    const { start, end, ideaId } = req.query;
    const startIndex = parseInt(start) || 0;
    const endIndex = parseInt(end) || 10;
    const feedbacks = await Feedback.find(ideaId?{ideaId}:{})
      .skip(startIndex)
      .limit(endIndex - startIndex);
    // sort by created date
    feedbacks.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    res.json(feedbacks);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  listFeedbacks,
};