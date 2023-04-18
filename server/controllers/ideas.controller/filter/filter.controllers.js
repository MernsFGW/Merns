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

        const ideas = await Idea.find(filterCriteria)
                                .populate('categoryId', 'title')
                                .populate('userId', 'fullName avatar').exec();
        res.json(ideas);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

export default { filterIdea };
