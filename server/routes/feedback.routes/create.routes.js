import express from "express";
import feedbackCtrl from "../../controllers/feedbacks.controller/create/create.controller.js";

const router = express.Router();

router.route("/api/new/feedbacks").post(feedbackCtrl.create);
export default router;
