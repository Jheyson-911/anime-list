import { Router } from 'express';
import {
  createAnime,
  deleteAnime,
  getAnimeById,
  getAnimeByUser,
  getAnimes,
  getAnimesByCalificacion,
  getAnimesByFavoritos,
  getAnimesByTipo,
  getAnimeVistos,
  updateAnime,
} from '../controller/anime.controller.js';
import jwtVerify from '../middleware/jwt.middleware.js';

const router = new Router();
router.get('/animes', jwtVerify, getAnimes);
router.get('/animes/mine', jwtVerify, getAnimeByUser);
router.get('/animes/:id', jwtVerify, getAnimeById);
router.put('/animes/:id', jwtVerify, updateAnime);
router.delete('/animes/:id', jwtVerify, deleteAnime);
router.post('/animes', jwtVerify, createAnime);
router.get('/animes/mine/vistos', jwtVerify, getAnimeVistos);
router.get('/animes/mine/favoritos', jwtVerify, getAnimesByFavoritos);
router.get(
  '/animes/mine/calificacion/:num',
  jwtVerify,
  getAnimesByCalificacion
);
router.get('/animes/mine/tipo/:tipo', jwtVerify, getAnimesByTipo);

export default router;
