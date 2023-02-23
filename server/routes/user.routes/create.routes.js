import express from 'express';
import verifyToken from '../../helpers/verifyToken'
import userCtrl from '../../controllers/users.controller/create/create.controller';
const router = express.Router();

router.route('/api/users/new')
    .post(verifyToken,userCtrl.create);

export default router;