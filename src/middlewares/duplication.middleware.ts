import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities";

export const verifyDuplicateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const user = await getRepository(User).findOne({ email: email });

  if (user) {
    return res.status(400).json({ message: "E-mail already registered" });
  }

  return next();
};
