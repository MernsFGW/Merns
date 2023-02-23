import express from 'express';
import verifyToken from '../../helpers/verifyToken'
import userCtrl from '../../controllers/users.controller/update/update.controller';

const router = express.Router();

router.route('/api/users/:id')
    .put(verifyToken,userCtrl.update);

export default router;