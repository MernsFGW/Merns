import errorHandler from '../../../helpers/dbErrorHandler.js';
import extend from 'lodash/extend.js';
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
        if(files.photo){
            const photoResult = await cloudinary.uploader.upload(files.photo.path, {
                overwrite: true,
                folder: "Photo"
            });
            idea.photo.public_id = photoResult.public_id;
            idea.photo.url = photoResult.secure_url;
        }
        try {
            await idea.save();
            res.json({
                idea: idea,
                message: "Updated idea successfully"
            });
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