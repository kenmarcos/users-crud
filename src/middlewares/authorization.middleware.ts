import { getCustomRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import UserRepository from "../repositories/user.repository";

export const authorizateAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = getCustomRepository(UserRepository);

  const user = await userRepository.findByUuid(req.user.uuid);

  if (user) {
    const { isAdm } = user;
    if (!isAdm) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  }

  return next();
};
