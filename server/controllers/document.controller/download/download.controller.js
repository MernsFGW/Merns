import cloudinary from "cloudinary";
import archiver from "archiver";
import errorHandler from "../../../helpers/dbErrorHandler.js";
import Idea from "../../../models/idea.model";

const downloadImages = async (req, res) => {
    const { ideaId } = req.params;

    try {
        // Get all images urls of the idea
        const idea = await Idea.findById(ideaId);
        const imageUrl = idea.photo.url;
        const publicId = idea.photo.public_id;

        // Download images
        const archive = archiver("zip", {
            zlib: { level: 9 },
        });

        // Set the archive name 
        res.attachment(`images-${ideaId}.zip`);

        // Pipe the archive to the response
        archive.pipe(res);

        // Get Image from Cloudinary
        const resource = await cloudinary.v2.api.resource(publicId);
        const imageStream = cloudinary.v2.uploader.download(resource.id);
        archive.append(imageStream, { name: publicId });

        // Finalize the archive and send it to the client
        archive.finalize();
        archive.pipe(res);
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            error: errorHandler.getErrorMessage(error),
        });
    }
};

export default { downloadImages };