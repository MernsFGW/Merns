import errorHandler from '../../../helpers/dbErrorHandler.js';

const findById = async (req, res) => {
    try {
        const idea = req.information;
        res.status(200).json({
            idea,
            message: "Idea found successfully"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
    }
}

export default {
    findById
}