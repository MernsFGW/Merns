import errorHandler from "../../../helpers/dbErrorHandler.js";
import Feedback from "./../../../models/feedback.model";

const listFeedbacks = async (req, res) => {
  try {
    const { start, end, ideaId } = req.query;
    let feedbacks = {}
    if(start && end){
      const startIndex = parseInt(start);
      const endIndex = parseInt(end);
      feedbacks = await Feedback.find(ideaId?{ideaId}:{})
        .skip(startIndex)
        .limit(endIndex - startIndex);
      feedbacks.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    }else{
      feedbacks = await Feedback.find(ideaId?{ideaId}:{}).sort({createdAt: -1})
    }
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