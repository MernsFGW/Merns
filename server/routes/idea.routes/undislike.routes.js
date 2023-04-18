import express from 'express';
import ideaCtrl from '../../controllers/ideas.controller/dislike/undislike.controller.js';
import userCtrl from '../../controllers/user.controller/id/id.controller.js';

const router = express.Router();

router.route('/api/ideas/:userId/undislike/:id').patch(ideaCtrl.undislikeIdea);

router.param('userId', userCtrl.userByID);

export default router;  