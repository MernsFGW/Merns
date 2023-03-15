import errorHandler from '../../../helpers/dbErrorHandler.js';
import Idea from './../../../models/idea.model';

const list = async (req, res) => {
    try {
      let ideas = await Idea.find()
                  .sort({"createdAt": -1})
                  .populate('like')
                  .populate('dislike')
                  .populate('categoryId', 'title')
                  .populate('userId', 'fullName avatar').exec();
      res.json(ideas);
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
}

export default {list}