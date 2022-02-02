import express from "express";
import { login } from "../controllers/login.controller";
import { validate } from "../middlewares/validation.middleware";
import { loginSchema } from "../schemas/user.schemas";

const router = express.Router();

export const loginRouter = () => {
  router.post("", validate(loginSchema), login);

  return router;
};
