import express from "express";
import feedbackCtrl from "../../controllers/feedbacks.controller/list/list.controllers";

const router = express.Router();

router.route("/api/feedbacks").get(feedbackCtrl.listFeedbacks);

export default router;
