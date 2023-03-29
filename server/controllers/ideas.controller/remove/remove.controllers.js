import errorHandler from '../../../helpers/dbErrorHandler.js';
import cloudinary from '../../../helpers/cloudinary.js';

const remove = async (req, res) => {
    let idea = req.information;
    let image;
    try {
        if(Object.keys(idea.photo).length > 0){
            let public_id = idea.photo.public_id;
            image = idea.photo.url;
            if (image !== undefined){
                const photoResult = await cloudinary.uploader
                    .destroy(public_id, (err, result) => {
                        if (err) {
                            throw errorHandler.getErrorMessage(err)
                        }
                    }
                );
            }
        }
        let deletedIdea = await idea.remove();
        res.status(200).json({
            idea: deletedIdea._id,
            image: image?"Deleted image Successfully":"Cannot delete image",
            message: "Deleted idea Successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default { remove }