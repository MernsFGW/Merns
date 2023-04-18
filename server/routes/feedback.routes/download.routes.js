import express from "express";
import verifyToken from '../../helpers/verifyToken'
import feedbackCtrl from "../../controllers/feedbacks.controller/download/download.controller.js";

const router = express.Router();
router.route("/api/feedbacks/download").get(verifyToken,feedbackCtrl.download);
export default router;