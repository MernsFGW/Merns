import express from 'express';
import departmentCtrl from '../../controllers/departments.controller/remove/remove.controllers';
import departmentIdCtrl from '../../controllers/departments.controller/id/id.controller'

const router = express.Router();

router.route('/api/departments/:departmentId')
    .delete(departmentCtrl.remove);

router.param('departmentId', departmentIdCtrl.departmentById)

export default router;