import express from "express";
import verifyToken from '../../helpers/verifyToken'
import termCtrl from "../../controllers/terms.controller/id/id.controller.js";

const router = express.Router();

router.route("/api/terms/:id").get(termCtrl.termById);
export default router;
