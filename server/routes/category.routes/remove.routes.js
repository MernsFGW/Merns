import express from 'express';
import Category from '../../controllers/categories.controller/remove/remove.controller.js';

const router = express.Router();

router.route('/api/categories/delete/:id').delete(Category.removeCategory);

export default router;