import express from 'express';
import Category from '../../controllers/categories.controller/list/list.controller.js';

const router = express.Router();

router.route('/api/categories').get(Category.getAllCategories);

export default router;