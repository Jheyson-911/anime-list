import { Router } from 'express';
import {
  createPendiente,
  deletePendiente,
  getPendienteById,
  getPendientes,
  updatePendiente,
} from '../controller/pendientes.controller.js';

const router = new Router();

router.get('/pendientes', getPendientes);
router.get('/pendientes/:id', getPendienteById);
router.put('/pendientes/:id', updatePendiente);
router.delete('/pendientes/:id', deletePendiente);
router.post('/pendientes', createPendiente);

export default router;
