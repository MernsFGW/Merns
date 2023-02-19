import errorHandler from '../../../helpers/dbErrorHandler.js';

const remove = async (req, res) => {
    try {
        let idea = req.information;
        let deletedIdea = await idea.remove();
        res.status(200).json({
            idea: deletedIdea,
            message: "Deleted idea Successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
    }
}

export default {remove}