import express from "express";
import Department from "../../controllers/departments.controller/id/id.controller.js";

const router = express.Router();

router.route("/api/departments/:id").get(Department.departmentById);
export default router;
