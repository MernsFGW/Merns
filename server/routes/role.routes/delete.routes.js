import express from 'express';
import verifyToken from '../../helpers/verifyToken'
import roleCtrl from '../../controllers/roles.controller/remove/remove.controller';
const router = express.Router();

router.route('/api/roles/:id')
    .delete(verifyToken,roleCtrl.remove);

export default router;