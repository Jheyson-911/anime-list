import { Router } from 'express';
import { getUsers, login, register } from '../controller/user.controller.js';
import isAdmin from '../middleware/isAdmin.middleware.js';
import jwtVerify from '../middleware/jwt.middleware.js';

const router = new Router();

router.get('/users', jwtVerify, isAdmin, getUsers);
router.post('/register', register);
router.post('/login', login);

export default router;
