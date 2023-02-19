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
        let idea = req.information;
        idea = extend(idea, fields);
        idea.updatedAt = Date.now();
        if (files.photo){
            idea.photo.data = fs.readFileSync(files.photo.path);
            idea.photo.contentType = files.photo.type;
        }
        try {
            await idea.save();
            res.json(idea);
        } catch (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
    })
}

export default {
    update
}