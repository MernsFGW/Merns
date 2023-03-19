import express from "express";
import feedbackCtrl from "../../controllers/feedbacks.controller/create/create.controller.js";
import userCtrl from "../../controllers/user.controller/id/id.controller.js";

const router = express.Router();

router.route("/api/new/feedbacks").post(feedbackCtrl.create);
export default router;
