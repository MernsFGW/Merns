import errorHandler from "../../../helpers/dbErrorHandler.js";
import Idea from "../../../models/idea.model";
import {Blob} from 'buffer';

const download = async (req, res) => {
    const { ideaId, userId } = req.params;
    try {
        let conditions = {}
        if (ideaId && userId) {
            conditions = { $or: [{ userId: userId }, { ideaId: ideaId }] }
        }
        else if (ideaId) {
            conditions = { ideaId: ideaId }
        }
        else if (userId) {
            conditions = { userId: userId }
        }
        const ideas = await Idea.find(conditions)
            .populate("userId", "username")
            .lean();
        const records = ideas.map((idea) => {
            return {
                title: idea.title,
                content: idea.content,                
                incognito: idea.incognito,
                userId: idea.userId._id,
                userName: idea.userId.username
            }
        });
        const header = Object.keys(records[0]).toString();
        const main = records.map(record => Object.values(record).toString());
        const csv = [header, ...main].join("\n");
        const blob = new Blob([csv], {type: "application/csv"});
        res.setHeader("Content-Disposition", "attachment; filename=feedbacks.csv");
        res.set("Content-Type", "text/csv");
        res.status(200).send(blob);
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