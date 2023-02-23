import express from 'express';
import verifyToken from '../../helpers/verifyToken'
import userCtrl from '../../controllers/users.controller/list/list.controller';

const router = express.Router();

router.route('/api/users')
    .get(verifyToken,userCtrl.list);

export default router;