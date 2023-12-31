import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "../repositories/user.repository";
import AppError from "../errors/appError";

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    throw new AppError(401, "Missing authorization headers");
  }

  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    async (err: any, decoded: any) => {
      try {
        if (err) {
          throw new AppError(401, "Invalid token");
        } else {
          const userRepository = getCustomRepository(UserRepository);
          const user = await userRepository.findByUuid(decoded.uuid);
          if (!user) {
            throw new AppError(404, "User not found");
          }

          req.user = user;

          return next();
        }
      } catch (e) {
        next(e);
      }
    }
  );
};
