import express from 'express';
import ideaById from "../../controllers/ideas.controller/id/id.controller.js";
import ideaCtrl from "../../controllers/ideas.controller/findById/findById.controller.js"

const router = express.Router();

router.route('/api/ideas/:ideaId')
    .get(ideaCtrl.findById);

router.param('ideaId', ideaById.ideaById);

export default router;