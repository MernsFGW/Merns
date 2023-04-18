import express from "express";
import feedbackById from "../../controllers/feedbacks.controller/id/id.controller.js";
import feedbackCtrl from "../../controllers/feedbacks.controller/findById/findById.controller.js";

const router = express.Router();

router.route("/api/feedbacks/:feedbackId").get(feedbackCtrl.findById);

router.param("feedbackId", feedbackById.feedbackById);

export default router;
