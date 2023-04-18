import express from "express";
import verifyToken from '../../helpers/verifyToken'
import termCtrl from "../../controllers/terms.controller/create/create.controller.js";

const router = express.Router();

router.route("/api/terms/new").post(verifyToken, termCtrl.create);
export default router;
