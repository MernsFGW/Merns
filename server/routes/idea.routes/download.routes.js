import express from "express";
import verifyToken from '../../helpers/verifyToken'
import ideaCtrl from "../../controllers/ideas.controller/download/download.controller.js";

const router = express.Router();
router.route("/api/ideas/download").get(verifyToken,ideaCtrl.download);
export default router;