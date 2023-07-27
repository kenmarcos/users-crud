import { Request, Response, NextFunction } from "express";
import AppError from "../errors/appError";

export const authorizateAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdm } = req.user;

  if (!isAdm) {
    if (!req.params.uuid) {
      throw new AppError(403, "Unauthorized");
    } else if (req.params.uuid !== req.user.uuid) {
      throw new AppError(403, "Missing admin permissions");
    }

    return next();
  }
  return next();
};
