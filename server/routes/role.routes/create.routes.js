import express from 'express';
import verifyToken from '../../helpers/verifyToken'
import roleCtrl from '../../controllers/roles.controller/create/create.controller';
const router = express.Router();

router.route('/api/roles/new')
    .post(verifyToken,roleCtrl.create);

export default router;