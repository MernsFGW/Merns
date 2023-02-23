import express from 'express';
import verifyToken from '../../helpers/verifyToken'
import userCtrl from '../../controllers/users.controller/remove/remove.controller';
const router = express.Router();

router.route('/api/users/:id')
    .delete(verifyToken,userCtrl.remove);

export default router;