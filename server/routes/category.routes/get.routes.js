import express from 'express';
import Category from '../../controllers/categories.controller/get/getCategoryById.controller.js';

const router = express.Router();

router.route('/api/categories/:id').get(Category.getCategoryById);

export default router;