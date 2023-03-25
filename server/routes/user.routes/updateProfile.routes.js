import express from 'express';
import verifyToken from '../../helpers/verifyToken'
import userCtrl from '../../controllers/users.controller/updateProfile/updateProfile.controller';

const router = express.Router();

// router.route('/api/users/:id')
//     .put(verifyToken,userCtrl.updateProfile);

router.route('/api/users/:id')
    .put(userCtrl.updateProfile);

export default router;