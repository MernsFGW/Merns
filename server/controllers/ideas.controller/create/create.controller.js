import Idea from './../../../models/idea.model';
import errorHandler from '../../../helpers/dbErrorHandler.js';
// import fs from 'fs';
import formidable from 'formidable';
import cloudinary from '../../../helpers/cloudinary.js';

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
        idea.userId = req.profile;
        if(files.photo){
            
            const photoResult = await cloudinary.uploader.upload(files.photo.path, {
                folder: "Photo"
            });
            idea.photo.public_id = photoResult.public_id;
            idea.photo.url = photoResult.secure_url;
        }
        try {
            let ideaResult = await idea.save();
            res.status(200).json({
                idea: ideaResult,
                message: "Created idea successfully"
            });
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