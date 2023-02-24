import express from "express";

import Category from "../../controllers/categories.controller/create/create.controller.js";

const router = express.Router();

router.route('/api/categories/new').post(Category.createCategory)

export default router;