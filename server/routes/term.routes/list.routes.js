import express from 'express';
import termCtrl from '../../controllers/terms.controller/list/list.controllers';

const router = express.Router();

router.route('/api/terms')
    .get(termCtrl.list);

export default router;