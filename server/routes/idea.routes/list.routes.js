import express from "express";
import ideaCtrl from "../../controllers/ideas.controller/list/list.controllers";

const router = express.Router();

router.route("/api/ideas").get(ideaCtrl.list);

export default router;
