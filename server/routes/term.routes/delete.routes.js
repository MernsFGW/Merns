import express from 'express';
import termCtrl from '../../controllers/terms.controller/remove/remove.controllers';
import termIdCtrl from '../../controllers/terms.controller/id/id.controller'

const router = express.Router();

router.route('/api/terms/:termId')
    .delete(termCtrl.remove);

router.param('termId', termIdCtrl.termById)

export default router;