import errorHandler from '../../../helpers/dbErrorHandler.js';
import cloudinary from '../../../helpers/cloudinary.js';

const remove = async (req, res) => {
    try {
        let idea = req.information;
        let public_id = idea.photo.public_id;
        let url = idea.photo.url;
        let image
        const photoResult = await cloudinary.uploader
            .destroy(public_id, (err,result) =>
                    {
                        if (err) {
                            throw errorHandler.getErrorMessage(err)
                        } else {
                            image = result;
                        }
                    }
        );
        let deletedIdea = await idea.remove();
        res.status(200).json({
            idea: deletedIdea,
            image: image,
            message: "Deleted idea Successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
    }
}

export default {remove}