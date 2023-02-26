import express from "express";
import verifyToken from '../../helpers/verifyToken'
import termCtrl from "../../controllers/terms.controller/remove/remove.controllers.js";

const router = express.Router();

router.route("/api/terms/remove/:id").delete(termCtrl.removeTerm);
export default router;
