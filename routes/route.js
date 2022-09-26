import express from 'express';

import { addUser, getUsers, getUser, editUser, deleteUser } from '../controller/user-controller.js';

const router = express.Router();

router.post('/api/add',addUser);
router.get('/api/all',getUsers);
router.get('/api/:id',getUser);
router.post('/api/:id',editUser);
router.delete('/api/:id',deleteUser);

export default router;