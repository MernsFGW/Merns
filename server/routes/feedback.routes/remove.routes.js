import express from "express";
import feedbackCtrl from "../../controllers/feedbacks.controller/remove/remove.controllers";
import feedbackIdCtrl from "../../controllers/feedbacks.controller/id/id.controller";

const router = express.Router();

router.route("/api/feedbacks/:feedbackId").delete(feedbackCtrl.remove);

router.param("feedbackId", feedbackIdCtrl.feedbackById);

export default router;
