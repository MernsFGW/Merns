import express from 'express';
import Category from '../../controllers/categories.controller/update/update.controller.js';

const router = express.Router();

router.route('/api/categories/update/:id').patch(Category.updateCategory);

export default router;