import { Router } from 'express';
import { getUsers, login, register } from '../controller/user.controller.js';

const router = new Router();

router.get('/users', getUsers);
router.post('/register', register);
router.post('/login', login);

export default router;
