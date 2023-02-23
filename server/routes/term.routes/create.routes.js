import express from "express";
import termCtrl from "../../controllers/terms.controller/create/create.controller.js";

const router = express.Router();

router.route("/api/terms/new").post(termCtrl.create);
export default router;
