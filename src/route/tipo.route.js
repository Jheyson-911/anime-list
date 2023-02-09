import { Router } from 'express';
import {
  createTipo,
  deleteTipo,
  getTipo,
  getTipoById,
  updateTipo,
} from '../controller/tipo.controller.js';
import isAdmin from '../middleware/isAdmin.middleware.js';
import jwtVerify from '../middleware/jwt.middleware.js';

const router = new Router();

router.get('/tipos', jwtVerify, getTipo);
router.get('/tipos/:id', jwtVerify, isAdmin, getTipoById);
router.put('/tipos/:id', jwtVerify, isAdmin, updateTipo);
router.post('/tipos', jwtVerify, isAdmin, createTipo);
router.delete('/tipos/:id', jwtVerify, isAdmin, deleteTipo);

export default router;
