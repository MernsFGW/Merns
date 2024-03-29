import express from "express";
import ideaCtrl from "../../controllers/ideas.controller/filter/filter.controllers";

const router = express.Router();

router.route("/api/ideas/filter").get(ideaCtrl.filterIdea);

export default router;
