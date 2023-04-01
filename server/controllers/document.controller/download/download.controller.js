import archiver from "archiver";
import errorHandler from "../../../helpers/dbErrorHandler.js";
import Idea from "../../../models/idea.model";
import request from "request";
import fs from "fs";

const downloadImages = async (req, res) => {
    const { ideaId } = req.query;

    try {
        const ideas = await Idea.find(ideaId?{_id: ideaId}:{});
        if(ideas.length === 0) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage("No ideas found"),
            });
        }
        const zip = archiver("zip", { zlib: { level: 9 } });
        const zipFileName = "ideas.zip";
        const output = fs.createWriteStream(zipFileName);
        zip.pipe(output);
        for (let idea of ideas) {
            const imageUrls = idea.photo.url;
            if (!imageUrls) {
                console.log(`Image not found for idea ${idea._id}`);
                continue;
            }

            let formatImage = imageUrls.split(".");
            formatImage = formatImage[formatImage.length - 1];
            const publicId = idea.photo.public_id;
            const ideaZipFileName = `document_${idea._id}.zip`;
            const ideaOutput = fs.createWriteStream(ideaZipFileName);
            const ideaArchive = archiver("zip", { zlib: { level: 9 } });
            ideaArchive.pipe(ideaOutput);
            
            const imageName =`${publicId}.${formatImage}`;
            ideaArchive.append(request(imageUrl), { name: imageName });

            await ideaArchive.finalize();

            zip.append(fs.createReadStream(ideaZipFileName), {
                name: ideaZipFileName,
            });

            fs.unlinkSync(ideaZipFileName);
        }

        zip.finalize();

        output.on("close", () => {
                res.download(zipFileName, (err) => {
                    if (err) {
                        console.log(">>>", err);
                    }
                    fs.unlinkSync(zipFileName); // delete the zip file after downloading
                });
        });

        zip.on("error", (err) => {
            throw err;
        });

    } catch (error) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(error),
        });
    }
};

export default { downloadImages };