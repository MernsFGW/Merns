import errorHandler from '../../../helpers/dbErrorHandler.js';
import Term from './../../../models/term.model';

const list = async (req, res) => {
    try {
      let terms = await Term.find();
      res.json(terms)
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
}

export default {list}