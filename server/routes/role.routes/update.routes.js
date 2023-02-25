import express from 'express';
import verifyToken from '../../helpers/verifyToken'
import roleCtrl from '../../controllers/roles.controller/update/update.controller';
const router = express.Router();

router.route('/api/roles/:id')
    .put(verifyToken,roleCtrl.update);

export default router;