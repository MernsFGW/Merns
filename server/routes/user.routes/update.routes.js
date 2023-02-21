import express from 'express';
import userCtrl from '../../controllers/users.controller/update/update.controller';

const router = express.Router();

router.route('/api/users/:id')
    .put(userCtrl.update);

export default router;