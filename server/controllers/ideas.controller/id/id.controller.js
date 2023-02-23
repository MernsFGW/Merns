import Idea from './../../../models/idea.model.js';

const ideaById = async (req, res, next, id) => {
    try {
        let idea = await Idea.findById(id).exec();
        if (!idea) 
            return res.status(400).json({
                error: "Idea not found"
            }) 
        req.information = idea
        next()
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve idea"
        })
    }
}

export default {
    ideaById
}