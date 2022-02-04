import { Request, Response, NextFunction } from "express";
import { authenticateUser } from "../services/login.service";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await authenticateUser(req.body);
    return res.json({ token });
  } catch (e) {
    next(e);
  }
};
