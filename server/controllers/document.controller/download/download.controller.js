import archiver from "archiver";
import errorHandler from "../../../helpers/dbErrorHandler.js";
import Idea from "../../../models/idea.model";
import request from "request";
import fs from "fs";

const downloadImages = async (req, res) => {
    const { ideaId } = req.query;

    try {
        // Get all images urls of the idea
        const idea = await Idea.findById(ideaId);
        const imageUrls = idea.photo.url;
        console.log(imageUrls)
        let formatImage = imageUrls.split(".")
        formatImage = formatImage[formatImage.length - 1];
        const publicId = idea.photo.public_id;
        const zipFileName = `${publicId}.zip`;
        // Get Image from Cloudinary
        if (publicId != undefined) {
            request(imageUrls)
                .pipe(fs.createWriteStream(`${publicId}.${formatImage}`))
                .on("close", () => {
                    const output = fs.createWriteStream(zipFileName);
                    
                    const archive = archiver('zip', {
                        zlib: { level: 9 }
                    });

                    output.on('close', () => {
                        console.log(`${zipFileName} đã được tạo ra.`);
                        res.download(zipFileName, (err) => {
                            console.log(">>>", err)
                        })
                    });

                    archive.on('error', err => {
                        throw err;
                    });

                    archive.pipe(output);
                    archive.file(`${publicId}.${formatImage}`, { name: `${publicId}.${formatImage}` });
                    archive.finalize();
                })
        } else {
            return res.status(400).json({
                error: errorHandler.getErrorMessage("Image not found"),
            });
        }
    } catch (error) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(error),
        });
    }
};

export default { downloadImages };