import express from 'express';
import userCtrl from '../../controllers/users.controller/list/list.controller';

const router = express.Router();

router.route('/api/users')
    .get(userCtrl.list);

export default router;