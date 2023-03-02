import express from 'express';
import ideaCtrl from '../../controllers/ideas.controller/dislike/dislike.controller.js';
import userCtrl from '../../controllers/user.controller/id/id.controller.js';

const router = express.Router();

router.route('/api/ideas/:userId/dislike/:id').patch(ideaCtrl.dislikeIdea);

router.param('userId', userCtrl.userByID);

export default router;  