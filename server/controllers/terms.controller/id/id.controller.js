import Term from './../../../models/term.model.is';

const termById = async (req, res, next, id) => {
    try {
        let term = await Term.findById(id).exec();
        if (!term) 
            return res.status(400).json({
                error: "Term not found"
            }) 
        req.information = term
        next()
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve term"
        })
    }
}

export default {
    termById
}
