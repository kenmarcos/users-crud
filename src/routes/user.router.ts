import express from "express";
import {
  create,
  list,
  profile,
  exclude,
  update,
} from "../controllers/user.controller";
import { verifyDuplicateEmail } from "../middlewares/duplication.middleware";
import { authenticateUser } from "../middlewares/authentication.middleware";
import { authorizateAdmin } from "../middlewares/authorization.middleware";
import { validate } from "../middlewares/validation.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/user.schemas";

const router = express.Router();

export const userRouter = () => {
  router.post("", validate(createUserSchema), verifyDuplicateEmail, create);
  router.get("", authenticateUser, authorizateAdmin, list);
  router.get("/profile", authenticateUser, profile);
  router.patch(
    "/:uuid",
    authenticateUser,
    authorizateAdmin,
    validate(updateUserSchema),
    update
  );
  router.delete("/:uuid", authenticateUser, authorizateAdmin, exclude);

  return router;
};
