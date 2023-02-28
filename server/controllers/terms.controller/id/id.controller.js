import Term from './../../../models/term.model.js';

const termById = async (req, res) => {
    try {
        const { id } = req.params;
        const term = await Term.findById(id);

        if (!term) {
            return res.status(400).json({
                error: "Term not found"
            }) 
        }

        res.status(200).json(term);
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve term"
        })
    }
}

export default {
    termById
}
