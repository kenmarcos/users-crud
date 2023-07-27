import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities";
import AppError from "../errors/appError";

export const verifyDuplicateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;

    const user = await getRepository(User).findOne({ email: email });

    if (user) {
      throw new AppError(400, "E-mail already registered");
    }

    return next();
  } catch (e) {
    next(e);
  }
};
