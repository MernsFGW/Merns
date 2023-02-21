import express from 'express';
import ideaCtrl from '../../controllers/ideas.controller/create/create.controller.js';
import userCtrl from '../../controllers/user.controller/id/id.controller.js';

const router = express.Router();

router.route('/api/ideas/new/:userId')
    .post(ideaCtrl.create);

router.param('userId', userCtrl.userByID);

export default router;