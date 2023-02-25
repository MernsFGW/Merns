import express from 'express';
import ideaCtrl from '../../controllers/ideas.controller/sort/sort.controllers';

const router = express.Router();

router.route('/api/ideas/sort').get(ideaCtrl.sortIdea);

export default router;