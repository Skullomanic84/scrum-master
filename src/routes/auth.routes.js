import { Router } from 'express';
import { registerUser, login } from '../controllers/auth.controllers.js';
import { validate } from "../middlewares/validator.middleware.js";
import { userRegisterValidator, userLoginValidator } from "../validator/index.js";
import {asyncHandler} from "../utils/async-handler.js";

const router = Router();

// Register a new user
router.route("/register").post(userRegisterValidator(), validate, asyncHandler(registerUser))
router.route("/login").post(userLoginValidator(), validate, login);

export default router;