import Idea from './../../../models/idea.model';
import errorHandler from '../../../helpers/dbErrorHandler.js';
import fs from 'fs';
import formidable from 'formidable';

const create = async (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtension = true;
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "File could not be uploaded"
            })
        }
        let idea = new Idea(fields);
        if(files.photo){
            idea.photo.data = fs.readFileSync(files.photo.path);
            idea.photo.contentType = files.photo.type;
        }
        try {
            let ideaResult = await idea.save();
            res.json(ideaResult);
        } catch (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
              })
        }
    })
}


export default {
    create
}