import express from 'express';
import verifyToken from '../../helpers/verifyToken'
import roleCtrl from '../../controllers/roles.controller/list/list.controller';
const router = express.Router();

router.route('/api/roles')
    .get(verifyToken,roleCtrl.list);

export default router;