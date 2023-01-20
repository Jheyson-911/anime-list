import { Router } from 'express';
import jwtVerify from '../middleware/jwt.middleware.js';
import {
  createPendiente,
  deletePendiente,
  getPendienteById,
  getPendienteByUser,
  getPendientes,
  updatePendiente,
} from '../controller/pendientes.controller.js';

const router = new Router();

router.get('/pendientes', jwtVerify, getPendientes);
router.get('/pendientes/mine', jwtVerify, getPendienteByUser);
router.get('/pendientes/:id', jwtVerify, getPendienteById);
router.put('/pendientes/:id', jwtVerify, updatePendiente);
router.delete('/pendientes/:id', jwtVerify, deletePendiente);
router.post('/pendientes', jwtVerify, createPendiente);

export default router;
