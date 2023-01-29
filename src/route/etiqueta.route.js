import { Router } from 'express';
import {
  createEtiqueta,
  deleteEtiqueta,
  getEtiqueta,
  getEtiquetaById,
  updateEtiqueta,
} from '../controller/etiqueta.controller.js';
import jwtVerify from '../middleware/jwt.middleware.js';

const router = new Router();

router.get('/etiquetas', jwtVerify, getEtiqueta);
router.get('/etiquetas/:id', jwtVerify, getEtiquetaById);
router.put('/etiquetas/:id', jwtVerify, updateEtiqueta);
router.post('/etiquetas', jwtVerify, createEtiqueta);
router.delete('/etiquetas/:id', jwtVerify, deleteEtiqueta);

export default router;
