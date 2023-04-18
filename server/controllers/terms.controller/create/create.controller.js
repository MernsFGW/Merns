import Term from './../../../models/term.model';
import errorHandler from '../../../helpers/dbErrorHandler.js';

const create = async (req, res) => {    
    try {
        const term = req.body;

        const newterm = new Term(term);

        await newterm.save();

        res.status(201).json(newterm);
    } catch (error) {
        res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default {create}