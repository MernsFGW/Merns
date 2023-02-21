import express from 'express';
import userCtrl from '../../controllers/users.controller/remove/remove.controller';

const router = express.Router();

router.route('/api/users/:id')
    .delete(userCtrl.remove);

export default router;