import express from 'express';
import departmentCtrl from '../../controllers/departments.controller/list/list.controllers';


const router = express.Router();

router.route('/api/departments')
    .get(departmentCtrl.list);

export default router;