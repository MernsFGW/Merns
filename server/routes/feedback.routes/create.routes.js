import express from 'express';
import feedbackCtrl from '../../controllers/feedbacks.controller/create/create.controller.js';
import userCtrl from '../../controllers/user.controller/id/id.controller.js';

const router = express.Router();

router.route('/api/feedbacks/new/:userId')
    .post(feedbackCtrl.create);

router.param('userId', userCtrl.userByID);

export default router;


