import errorHandler from '../../../helpers/dbErrorHandler.js';
import Idea from './../../../models/department.model';

const list = async (req, res) => {
    try {
      let ideas = await Idea.find();
      res.json(ideas)
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
}

export default {list}