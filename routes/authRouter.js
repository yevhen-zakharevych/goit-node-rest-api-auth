import { Router } from "express";

import ctrlWrapper from "../helpers/ctrlWrapper.js";
import validateBody from "../helpers/validateBody.js";

import auth from "../middlewares/auth.js";

import { authSignupSchema, authSigninSchema } from "../schemas/authSchemas.js";

import {
  signup,
  signin,
  getCurrent,
  logout,
} from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post(
  "/register",
  validateBody(authSignupSchema),
  ctrlWrapper(signup)
);

authRouter.post("/login", validateBody(authSigninSchema), ctrlWrapper(signin));

authRouter.get("/current", auth, ctrlWrapper(getCurrent));

authRouter.post("/logout", auth, ctrlWrapper(logout));

export default authRouter;
