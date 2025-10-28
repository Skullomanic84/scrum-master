import { Router } from 'express';
import { registerUser } from '../controllers/auth.controllers.js';
import { validate } from "../middlewares/validator.middleware.js";
import { userRegisterValidator } from "../validator/index.js";
import {asyncHandler} from "../utils/async-handler.js";

const router = Router();

// Register a new user
router.route("/register").post(userRegisterValidator(), validate, asyncHandler(registerUser))

export default router;