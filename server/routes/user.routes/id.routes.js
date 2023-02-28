import express from 'express';
import verifyToken from '../../helpers/verifyToken'
import userCtrl from '../../controllers/users.controller/id/id.controller'

const router = express.Router();

router.route('/api/users/:id').get(verifyToken,userCtrl.userById);

export default router;