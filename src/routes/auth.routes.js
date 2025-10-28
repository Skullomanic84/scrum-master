import { Router } from 'express';
import { registerUser } from '../controllers/auth.controllers.js';

const router = Router();

// Register a new user
router.post('/register', registerUser);

export default router;