import express from "express";
import verifyToken from '../../helpers/verifyToken'
import termCtrl from "../../controllers/terms.controller/update/update.controller.js";

const router = express.Router();

router.route("/api/terms/update/:id").patch(verifyToken, termCtrl.updateTerm);
export default router;
