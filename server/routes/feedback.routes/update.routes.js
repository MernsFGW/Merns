import express from "express";
import feedbackCtrl from "../../controllers/feedbacks.controller/update/update.controller";
import feedbackIdCtrl from "../../controllers/feedbacks.controller/id/id.controller";

const router = express.Router();

router.route("/api/feedbacks/:feedbackId").put(feedbackCtrl.update);

router.param("feedbackId", feedbackIdCtrl.feedbackById);

export default router;
