import express from 'express';
import verifyToken from '../../helpers/verifyToken'
import userCtrl from '../../controllers/users.controller/updatePassword/updatePassword.controller';

const router = express.Router();

// router.route('/api/users/changePassword/:id')
//     .put(verifyToken,userCtrl.updatePassword);

router.route('/api/users/changepassword/:id')
    .put(userCtrl.updatePassword);

export default router;