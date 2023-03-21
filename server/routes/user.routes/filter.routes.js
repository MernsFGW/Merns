import express from "express";
import userCtrl from "../../controllers/users.controller/filter/filter.controller";

const router = express.Router();

router.route("/api/users/filter").get(userCtrl.filterUser);

export default router;
