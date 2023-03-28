import express from 'express';
import departmentCtrl from '../../controllers/departments.controller/remove/remove.controllers';

const router = express.Router();

router.route('/api/departments/:id')
    .delete(departmentCtrl.remove);

export default router;