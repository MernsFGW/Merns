import express from "express";
import verifyToken from '../../helpers/verifyToken'
import termCtrl from "../../controllers/terms.controller/list/list.controller.js";

const router = express.Router();

router.route("/api/terms").get(verifyToken, termCtrl.list);
export default router;
