import express from 'express';
import departmentCtrl from '../../controllers/departments.controller/update/update.controllers';
import departmentIdCtrl from '../../controllers/departments.controller/id/id.controller'

const router = express.Router();

router.route('/api/departments/:departmentId')
    .put(departmentCtrl.update);

router.param('departmentId', departmentIdCtrl.departmentById)

export default router;