import { Router } from 'express';
import { getUsers, postUsers, userEmail } from '../controllers/users';

const userRoutes = Router();

userRoutes.get('/', getUsers);

userRoutes.post('/', postUsers);

userRoutes.post('/email', userEmail);

export default userRoutes;
