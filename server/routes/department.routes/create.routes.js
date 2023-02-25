import express from 'express';
import departmentCrtl from '../../controllers/departments.controller/create/create.controller.js';

const router = express.Router();

router.route('/api/departments/new')
    .post(departmentCrtl.create);

export default router;