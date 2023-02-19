import express from 'express';
import ideaCtrl from '../../controllers/ideas.controller/remove/remove.controllers';
import ideaIdCtrl from '../../controllers/ideas.controller/id/id.controller'

const router = express.Router();

router.route('/api/ideas/:ideaId')
    .delete(ideaCtrl.remove);

router.param('ideaId', ideaIdCtrl.ideaById)

export default router;