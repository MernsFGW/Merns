import errorHandler from "../../../helpers/dbErrorHandler.js";
import Feedback from "../../../models/feedback.model";
import createCsvWriter from "csv-writer";

const download = async (req, res) => {
    const { ideaId, parentId } = req.params;
    try {
        let conditions = {}
        if (ideaId && parentId) {
            conditions = { $or: [{ parentFeedbackId: parentId }, { ideaId: ideaId }] }
        }
        else if (ideaId) {
            conditions = { ideaId: ideaId }
        }
        else if (parentId) {
            conditions = { parentFeedbackId: parentId }
        }
        const feedbacks = await Feedback.find(conditions)
            .populate("userId", "username")
            .populate("parentFeedbackId");
        const fileName = `data_feedbacks.csv`;
        const csvWriter = createCsvWriter.createObjectCsvWriter({
            path: fileName,
            header: [
                { id: "content", title: "Content" },
                { id: "createdAt", title: "Created At" },
                { id: "updatedAt", title: "Updated At" },
                { id: "incognito", title: "Incognito" },
                { id: "userId", title: "User ID" },
                { id: "parentFeedbackId", title: "Parent Feedback ID" },
            ],
        });
        await csvWriter.writeRecords(feedbacks);
        res.download(fileName);
    } catch (error) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
}

export default {
    download
}