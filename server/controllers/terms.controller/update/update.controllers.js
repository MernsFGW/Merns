import errorHandler from '../../../helpers/dbErrorHandler.js';
import extend from 'lodash/extend.js';
import fs from 'fs';
import formidable from 'formidable';

const update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "File could not be uploaded"
            })
        }
        let term = req.term;
        term = extend(term, fields);
        term.updatedAt = Date.now();
        try {
            await term.save();
            res.json({
                term: term,
                message: "Updated term successfully"
            });
        }
        catch (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
    })
}

export default {
    update
}