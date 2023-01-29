import { Router } from 'express';
import {
  createEtiqueta,
  deleteEtiqueta,
  getEtiqueta,
  getEtiquetaById,
  updateEtiqueta,
} from '../controller/etiqueta.controller.js';
import isAdmin from '../middleware/isAdmin.middleware.js';
import jwtVerify from '../middleware/jwt.middleware.js';

const router = new Router();

router.get('/etiquetas', jwtVerify, isAdmin, getEtiqueta);
router.get('/etiquetas/:id', jwtVerify, isAdmin, getEtiquetaById);
router.put('/etiquetas/:id', jwtVerify, isAdmin, updateEtiqueta);
router.post('/etiquetas', jwtVerify, isAdmin, createEtiqueta);
router.delete('/etiquetas/:id', jwtVerify, isAdmin, deleteEtiqueta);

export default router;
