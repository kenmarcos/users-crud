import { Request, Response, NextFunction } from "express";
import AppError from "../errors/appError";

export const authorizateAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { isAdm } = req.user;

    if (!isAdm) {
      if (!req.params.uuid) {
        throw new AppError(401, "Unauthorized");
      } else if (req.params.uuid !== req.user.uuid) {
        throw new AppError(401, "Missing admin permissions");
      }

      return next();
    }
    return next();
  } catch (e) {
    next(e);
  }
};
