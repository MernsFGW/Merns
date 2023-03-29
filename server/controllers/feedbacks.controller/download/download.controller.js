import errorHandler from "../../../helpers/dbErrorHandler.js";
import Feedback from "../../../models/feedback.model";
import {Blob} from 'buffer';

const download = async (req, res) => {
    const { ideaId, parentId } = req.query;
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
            .populate("parentFeedbackId")
            .lean();
        const records = feedbacks.map((feedback) => {
            return {
                content: feedback.content,
                incognito: feedback.incognito,
                userId: feedback.userId._id,
                userName: feedback.userId.username,
                parentFeedbackId: feedback.parentFeedbackId[0]?._id,
            };
        });
        const header = Object.keys(records[0]).toString();
        const main = records.map(record => Object.values(record).toString());
        const csv = [header, ...main].join("\n");
        const blob = new Blob([csv], {type: "application/csv"});
        res.setHeader("Content-Disposition", "attachment; filename=feedbacks.csv");
        res.set("Content-Type", "text/csv");
        blob.arrayBuffer().then(buffer => {
        const data = Buffer.from(buffer);
            res.write(data);
            res.end();
        }).catch(err => {
            res.status(500).send({ error: err.message });
        });
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            error: errorHandler.getErrorMessage(error),
        });
    }
}

export default {
    download
}