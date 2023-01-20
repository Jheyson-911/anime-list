import { Router } from 'express';
import {
  createTipo,
  deleteTipo,
  getTipo,
  getTipoById,
  updateTipo,
} from '../controller/tipo.controller.js';
import jwtVerify from '../middleware/jwt.middleware.js';

const router = new Router();

router.get('/tipos', jwtVerify, getTipo);
router.get('/tipos/:id', jwtVerify, getTipoById);
router.put('/tipos/:id', jwtVerify, updateTipo);
router.post('/tipos', jwtVerify, createTipo);
router.delete('/tipos/:id', jwtVerify, deleteTipo);

export default router;
