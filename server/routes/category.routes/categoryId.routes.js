import express from "express";

import Category from "../../controllers/categories.controller/id/id.controller";

const router = express.Router();

router.route('/api/categories/:id').get(Category.getCategoryById);

export default router;