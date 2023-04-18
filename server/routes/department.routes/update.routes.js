import express from 'express';
import departmentCtrl from '../../controllers/departments.controller/update/update.controllers';

const router = express.Router();

router.route('/api/departments/:id')
    .put(departmentCtrl.update);

export default router;