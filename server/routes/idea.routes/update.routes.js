import express from 'express';
import ideaCtrl from '../../controllers/ideas.controller/update/update.controllers';
import ideaIdCtrl from '../../controllers/ideas.controller/id/id.controller'

const router = express.Router();

router.route('/api/ideas/:ideaId')
    .put(ideaCtrl.update);

router.param('ideaId', ideaIdCtrl.ideaById)

export default router;