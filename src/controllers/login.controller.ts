import { Request, Response } from "express";
import { authenticateUser } from "../services/login.service";

export const login = async (req: Request, res: Response) => {
  const token = await authenticateUser(req.body);

  return token
    ? res.json({ token })
    : res.status(401).json({ message: "Wrong email/password" });
};
