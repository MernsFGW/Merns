import express from 'express';
import ideaCtrl from '../../controllers/ideas.controller/create/create.controller.js';

const router = express.Router();

router.route('/api/ideas/new')
    .post(ideaCtrl.create);

export default router;