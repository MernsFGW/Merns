import express from "express";
import documentCtrl from "../../controllers/document.controller/download/download.controller.js";

const router = express.Router();

// Download images route
router.route("/ideas/:ideaId/documents").get(documentCtrl.downloadImages);

export default router;