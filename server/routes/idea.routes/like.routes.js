import express from 'express';
import ideaCtrl from '../../controllers/ideas.controller/like/like.controller.js';
import userCtrl from '../../controllers/user.controller/id/id.controller.js';

const router = express.Router();

router.route('/api/ideas/:userId/like/:id').patch(ideaCtrl.likeIdea);

router.param('userId', userCtrl.userByID);

export default router;