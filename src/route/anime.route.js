import { Router } from 'express';
import {
  createAnime,
  deleteAnime,
  getAnimeById,
  getAnimeByUser,
  getAnimes,
  getAnimesByFavoritos,
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

export default router;
