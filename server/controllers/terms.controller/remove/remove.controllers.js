import errorHandler from '../../../helpers/dbErrorHandler.js';

const remove = async (req, res) => {
    try {
        let term = req.term;
        let deletedTerm = await term.remove();
        res.json(deletedTerm);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default {remove}