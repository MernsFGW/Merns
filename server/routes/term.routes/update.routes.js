import express from 'express';
import termCtrl from '../../controllers/terms.controller/update/update.controllers';
import termIdCtrl from '../../controllers/terms.controller/id/id.controller'

const router = express.Router();

router.route('/api/terms/:termId')
    .put(termCtrl.update);

router.param('termId', termIdCtrl.termById)

export default router;