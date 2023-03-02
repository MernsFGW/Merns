import errorHandler from "../../../helpers/dbErrorHandler.js";
import Idea from "../../../models/idea.model";

const filterIdea = async (req, res) => {
    try {
        const { categoryId, termId, userId } = req.query;
        const filterCriteria = {};

        if (categoryId) {
            filterCriteria.categoryId = categoryId;
        }

        if (termId) {
            filterCriteria.termId = termId;
        }

        if (userId) {
            filterCriteria.userId = userId;
        }

        const ideas = await Idea.find(filterCriteria);

        const response = {
            ideas,
            count: ideas.length,
        };
        res.json(response);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

export default { filterIdea };
