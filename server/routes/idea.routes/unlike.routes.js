import express from 'express';
import ideaCtrl from '../../controllers/ideas.controller/like/unlike.controller.js';
import userCtrl from '../../controllers/user.controller/id/id.controller.js';

const router = express.Router();

router.route('/api/ideas/:userId/unlike/:id').patch(ideaCtrl.unlikeIdea);

router.param('userId', userCtrl.userByID);

export default router;