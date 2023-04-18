import express from "express";
import ideaCtrl from "../../controllers/ideas.controller/listbyUserId/listbyUserId.controller.js";

const router = express.Router();

router.route("/api/ideas/user/:userId").get(ideaCtrl.findbyUserId);

export default router;